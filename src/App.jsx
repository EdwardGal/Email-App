import { useState, useEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from "react-dnd-touch-backend";
import { appbarData } from './data/appbar';
import { sidebarData } from './data/sidebar';
import { Header } from './components/header/Header';
import { Menu } from './components/menu/Menu';
import { Sandbox } from './components/sandbox/Sandbox';
import { Settings } from './components/settings/Settings';
import { Toolbar } from './components/toolbar/Toolbar';
import { Toast } from './components/alerts/Toast';
import { load, save, clear } from './utils/storage';
import { SAVE_DEBOUNCE_MS, TOAST_DURATION_MS } from './utils/constants';

const BODY_DARK_CLASS = 'is-dark';

const isTouch = "ontouchstart" in window;
const backend = isTouch ? TouchBackend : HTML5Backend;

export const App = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedBlockId, setSelectedBlockId] = useState(null);
  const [selectedBlockPosition, setSelectedBlockPosition] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [isDark, setIsDark] = useState(false);
  const saveTimeoutRef = useRef(null);

  const selectedBlock = templates.find((t) => t.id === selectedBlockId);

  useEffect(() => {
    if (templates.length === 0) return;
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    saveTimeoutRef.current = setTimeout(() => {
      save(templates, isDark);
      saveTimeoutRef.current = null;
    }, SAVE_DEBOUNCE_MS);
    return () => {
      if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current);
    };
  }, [templates, isDark]);

  useEffect(() => {
    if (templates.length === 0 && isDark) setIsDark(false);
  }, [templates.length, isDark]);

  useEffect(() => {
    document.body.classList.toggle(BODY_DARK_CLASS, isDark);
  }, [isDark]);

  const handleRestore = () => {
    const { templates: restoredTemplates, isDark: restoredIsDark } = load();
    setTemplates(restoredTemplates);
    setIsDark(restoredIsDark);
    setSelectedBlockId(null);
    setSelectedBlockPosition(null);
    setToastMessage('Восстановлено');
  };

  const handleReset = () => {
    setTemplates([]);
    setSelectedBlockId(null);
    setSelectedBlockPosition(null);
    setIsDark(false);
    clear();
    setToastMessage('Сброшено');
  };

  return (
    <DndProvider backend={backend}>
      <Header
        data={appbarData}
        templates={templates}
        isDark={isDark}
        onShowToast={setToastMessage}
        onRestore={handleRestore}
        onReset={handleReset}
      />

      <Menu data={sidebarData} />

      <Sandbox
        templates={templates}
        setTemplates={setTemplates}
        selectedBlockId={selectedBlockId}
        setSelectedBlockId={setSelectedBlockId}
        selectedBlockPosition={selectedBlockPosition}
        setSelectedBlockPosition={setSelectedBlockPosition}
        onThemeChange={setIsDark}
      />

      <Settings selectedBlock={selectedBlock} setTemplates={setTemplates} />
      <Toolbar
        templates={templates}
        setTemplates={setTemplates}
        selectedBlock={selectedBlock}
        selectedBlockPosition={selectedBlockPosition}
      />
      <Toast
        message={toastMessage}
        visible={!!toastMessage}
        onClose={() => setToastMessage(null)}
        duration={TOAST_DURATION_MS}
      />
    </DndProvider>
  );
};
