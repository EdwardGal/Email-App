import styles from './empty.module.scss';

export const EmptyAlert = ({ icon, title, text }) => {
  return (
    <div className={styles.empty}>
      <span className={`${styles.empty__icon} material-symbols-outlined`}>{icon}</span>
      <h3 className={styles.empty__title}>{title}</h3>
      <p className={styles.empty__desc}>{text}</p>
    </div>
  );
};
