import styles from './header.module.scss';

export const HeaderItem = ({ action, title, icon, label, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.header__btn} ${styles.header__btn_primary}`}
      data-action={action}
      title={title}
      onClick={() => onClick(action)}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <span>{label}</span>
    </button>
  );
};
