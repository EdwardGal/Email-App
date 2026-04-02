import styles from "./settings.module.scss";

export const SettingsField = ({ name, label, type, value, options, handleChange }) => {

  const renderControl = () => {
    switch (type) {
      case 'textarea':
        return (
          <textarea
            className={styles.settings__control}
            id={name}
            value={value}
            placeholder={name}
            onChange={handleChange}
          />
        );
      case 'select':
        return (
          <select
            className={styles.settings__control}
            id={name}
            value={value}
            onChange={handleChange}
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            className={styles.settings__control}
            id={name}
            type={type}
            value={value}
            onChange={handleChange}
          />
        );
    }
  }



  return (
    <div className={styles.settings__field}>
      <label className={styles.settings__label} htmlFor={name}>{label}</label>
      {renderControl()}
    </div>
  );
}
