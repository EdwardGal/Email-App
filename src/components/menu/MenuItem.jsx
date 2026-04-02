import styles from './menu.module.scss';
import { useDraggable } from '@dnd-kit/react';

export const MenuItem = ({ template, type, label, icon }) => {
  const { ref } = useDraggable({
    id: type,
    data: { pattern: template, type }
  });

  return (

    <li
      ref={ref}
      className={styles.options__item}
      data-type={type}
      role="button"
      tabIndex={0}
      title={`Перетащите "${label}" в рабочую область`}
      aria-label={`Перетащите "${label}" в рабочую область`}
    >
      <span className={`${styles.options__icon} material-symbols-outlined`}>
        {icon}
      </span>
      <span className={styles.options__label}>{label}</span>
    </li>

  );
};
