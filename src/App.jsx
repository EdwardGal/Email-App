import { useEffect, useRef, useState } from 'react';
import { Header } from './components/header/Header';
import { Menu } from './components/menu/Menu';
import { Sandbox } from './components/sandbox/Sandbox';
import { Settings } from './components/settings/Settings';
import { Toast } from './components/toast/Toast';
import { DragDropProvider } from '@dnd-kit/react';
import { Toolbar } from './components/toolbar/Toolbar';
import { PromptModal } from './components/prompt/Prompt';
import { Preview } from './components/preview/Preview';
import { saveSandboxToStorage, getSandboxStorageState, STORAGE_STATE } from './utils/sandboxStorage';



export const App = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [toast, setToast] = useState({});
  const lastSavedJsonRef = useRef(null);


  const [hasSavedSandbox, setHasSavedSandbox] = useState(() => {
    return getSandboxStorageState().status === STORAGE_STATE.OK;
  });
  const [promptConfig, setPromptConfig] = useState(null);
  const [preview, setPreview] = useState(false);

  const activeTemplate = templates.find(template => template.id === selectedTemplate?.id);


  useEffect(() => {
    if (templates.length === 0) return;
    const json = JSON.stringify(templates);
    if (json === lastSavedJsonRef.current) return;
    const isSaved = saveSandboxToStorage(templates);
    if (isSaved) {
      lastSavedJsonRef.current = json;
      setHasSavedSandbox(true);
    }
  }, [templates]);

  return (
    <DragDropProvider>

      <Header setToast={setToast} openPrompt={setPromptConfig}  templates={templates}
        setTemplates={setTemplates} setPreview={setPreview} hasSavedSandbox={hasSavedSandbox}
        setHasSavedSandbox={setHasSavedSandbox} />
      <Menu />
      <Sandbox templates={templates} selectedTemplate={selectedTemplate} setTemplates={setTemplates} setSelectedTemplate={setSelectedTemplate} />
      <Settings activeTemplate={activeTemplate} setTemplates={setTemplates} />

      {toast && <Toast {...toast} setToast={setToast} />}
      {activeTemplate && (
        <Toolbar
          {...selectedTemplate}
          activeTemplate={activeTemplate}
          templates={templates}
          setTemplates={setTemplates}
          openPrompt={setPromptConfig}
          setToast={setToast}
        />
      )}
      {promptConfig &&
        <PromptModal
          mode={promptConfig.mode}
          title={promptConfig.title}
          content={promptConfig.content}
          onCancel={() => {
            promptConfig.onCancel?.();
            setPromptConfig(null);
          }}
          onConfirm={(value) => {
            promptConfig.onConfirm?.(value);
            setPromptConfig(null);
          }}
        />
      }
      {preview && <Preview setPreview={setPreview} templates={templates} />}

    </DragDropProvider>
  );
};
