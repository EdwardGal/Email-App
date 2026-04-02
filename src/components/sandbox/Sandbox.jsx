import styles from "./sandbox.module.scss";
import { Empty } from '../empty/Empty';
import { useDragDropMonitor, useDroppable } from '@dnd-kit/react';
import { SandboxItem } from './SandboxItem';
import { DND_TYPES, reorderTemplates, insertTemplateFromMenu, hasDarkTemplates } from '../../utils/dndSandbox';
import { memo } from 'react';

export const Sandbox = memo(({ templates, selectedTemplate, setTemplates, setSelectedTemplate }) => {

  const { ref, isDropTarget } = useDroppable({
    id: 'droppable',
  });

  useDragDropMonitor({
    onDragEnd: ({ operation }) => {
      const source = operation.source;
      const target = operation.target;
      if (!source || !target) return;

      const type = source.data?.type;

      if (type === DND_TYPES.SANDBOX_ITEM && target.data?.type === DND_TYPES.SANDBOX_ITEM) {
        const fromId = source.data.templateId;
        const toId = target.data.templateId;
        setTemplates((prev) => reorderTemplates(prev, fromId, toId));
        return;
      }

      let insertIndex = templates.length;
      if (target.data?.type === DND_TYPES.SANDBOX_ITEM) {
        const toId = target.data.templateId;
        const idx = templates.findIndex((t) => t.id === toId);
        if (idx !== -1) insertIndex = idx;
      } else if (target.id !== 'droppable') {
        return;
      }

      setTemplates((prev) => insertTemplateFromMenu(prev, source.data, insertIndex));
    },
  });

  return (
    <section
      ref={ref}
      className={`${styles.sandbox} ${hasDarkTemplates(templates) ? styles.sandbox_dark : ''} ${isDropTarget ? styles.sandbox_dropTarget : ''}`}
      onClick={(e) => (e.currentTarget === e.target) && setSelectedTemplate(null)}
      onScroll={() => setSelectedTemplate(null)}
    >
      {!templates.length
        ? (
          <Empty
            icon="add_circle_outline"
            title="Здесь пока пусто"
            text="Перетащите блок или шаблон из меню слева"
          />
        )
        : templates.map((template) => (
          <SandboxItem key={template.id} {...template} selectedTemplate={selectedTemplate} setTemplates={setTemplates} setSelectedTemplate={setSelectedTemplate} />
        ))}
    </section>
  );
});
