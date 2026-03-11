import { useRef, useState, useEffect, Fragment } from 'react';
import styles from './sandbox.module.scss';
import { EmptyAlert } from '../alerts/Empty';
import { useDrop } from 'react-dnd';
import { BLOCKS } from '../../templates/blocksRegistry';
import { TEMPLATES } from '../../templates/templatesRegistry';
import { SandboxItem } from './SandboxItem';
import { moveItem } from '../../utils/utils';
import { insertBlocksAt, updateBlockSettings } from '../../utils/templates';

const BLOCK_SELECTOR = '[data-type]';
const SANDBOX_ITEM_SELECTOR = '[data-sandbox-item]';

const EMPTY_STATE = {
  icon: 'add_circle_outline',
  title: 'Здесь пока пусто',
  text: 'Перетащите блок или шаблон из меню слева',
};

function getDropIndex(container, clientOffset) {
  if (!container || !clientOffset) return 0;
  const items = container.querySelectorAll(SANDBOX_ITEM_SELECTOR);
  let index = 0;
  for (let i = 0; i < items.length; i++) {
    const rect = items[i].getBoundingClientRect();
    const midY = rect.top + rect.height / 2;
    if (clientOffset.y > midY) index = i + 1;
    else break;
  }
  return index;
}

function createBlockWithId(block, blockType) {
  return { ...block, id: crypto.randomUUID(), type: blockType };
}

function DropIndicator() {
  return <div className={styles.sandbox__dropIndicator} aria-hidden />;
}

export const Sandbox = ({
  templates,
  setTemplates,
  selectedBlockId,
  setSelectedBlockId,
  setSelectedBlockPosition,
  onThemeChange,
}) => {
  const sandboxRef = useRef(null);
  const [dropIndicatorIndex, setDropIndicatorIndex] = useState(null);

  const syncBlockContent = (blockId, key, html) => {
    setTemplates((prev) => updateBlockSettings(prev, blockId, key, html));
  };

  const handleDropFromMenu = (item, insertIndex) => {
    setSelectedBlockId(null);
    const block = BLOCKS[item.blockType]?.();
    const template = TEMPLATES[item.blockType]?.();

    if (block) {
      setTemplates((prev) =>
        insertBlocksAt(prev, createBlockWithId(block, item.blockType), insertIndex)
      );
    }

    if (template) {
      const newBlocks = template.blocks.map((b) => ({
        ...b,
        id: crypto.randomUUID(),
      }));
      setTemplates((prev) => insertBlocksAt(prev, newBlocks, insertIndex));
      if (template.isDark) onThemeChange?.(true);
    }
  };

  const handleDropReorder = (item, insertIndex) => {
    const fromIndex = item.index;
    const toIndex = fromIndex < insertIndex ? insertIndex - 1 : insertIndex;
    if (fromIndex !== toIndex) {
      setTemplates((prev) => moveItem(prev, fromIndex, toIndex));
    }
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: ['MENU_ITEM', 'SANDBOX_ITEM'],

      hover: (item, monitor) => {
        const index = getDropIndex(sandboxRef.current, monitor.getClientOffset());
        setDropIndicatorIndex(index);
      },

      drop: (item, monitor) => {
        const insertIndex = getDropIndex(sandboxRef.current, monitor.getClientOffset());

        if (item.blockType) {
          handleDropFromMenu(item, insertIndex);
          return;
        }

        if (item.id != null && item.index != null) {
          handleDropReorder(item, insertIndex);
        }
      },

      collect: (monitor) => ({ isOver: monitor.isOver() }),
    }),
    [setTemplates, setSelectedBlockId, onThemeChange]
  );

  useEffect(() => {
    if (!isOver) setDropIndicatorIndex(null);
  }, [isOver]);

  const setRef = (el) => {
    drop(el);
    sandboxRef.current = el;
  };

  const handleClick = (e) => {
    const blockEl = e.target.closest(BLOCK_SELECTOR);
    if (blockEl) {
      const rect = blockEl.getBoundingClientRect();
      setSelectedBlockId(blockEl.id);
      setSelectedBlockPosition({
        top: rect.top + window.scrollY,
        left: rect.right + window.scrollX,
      });
    } else {
      setSelectedBlockId(null);
    }
  };

  const handleScroll = () => setSelectedBlockId(null);

  const showPlaceholder = isOver && dropIndicatorIndex !== null;

  return (
    <div
      className={`${styles.sandbox} ${isOver ? styles['is-drag-over'] : ''}`}
      ref={setRef}
      onClick={handleClick}
      onScroll={handleScroll}
    >
      {templates.length === 0 ? (
        <>
          {showPlaceholder && dropIndicatorIndex === 0 && <DropIndicator />}
          <EmptyAlert {...EMPTY_STATE} />
        </>
      ) : (
        <>
          {templates.map((template, index) => (
            <Fragment key={template.id}>
              {showPlaceholder && dropIndicatorIndex === index && <DropIndicator />}
              <SandboxItem
                template={template}
                index={index}
                isSelected={selectedBlockId === template.id}
                onSyncBlock={syncBlockContent}
              />
            </Fragment>
          ))}
          {showPlaceholder && dropIndicatorIndex === templates.length && (
            <DropIndicator />
          )}
        </>
      )}
    </div>
  );
};
