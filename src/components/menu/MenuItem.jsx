import { useDrag } from 'react-dnd';
import styles from './menu.module.scss';

const DRAG_TYPE = 'MENU_ITEM';

export const MenuItem = ({ type, label, icon }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: DRAG_TYPE,
      item: () => ({ blockType: type }),
      collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    }),
    [type]
  );

  return (
    <li
      ref={drag}
      className={`${styles.options__item} ${isDragging ? styles.dragging : ''}`}
      tabIndex={0}
    >
      <span
        className={`${styles.options__icon} material-symbols-outlined`}
      >
        {icon}
      </span>
      <span className={styles.options__label}>{label}</span>
    </li>
  );
};
