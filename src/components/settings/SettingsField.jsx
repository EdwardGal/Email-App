import styles from './settings.module.scss';
import { updateBlock } from '../../utils/templates';
import { STATIC_URL } from '../../utils/constants';

export const SettingsField = ({ field, value, selectedBlock, setTemplates }) => {
  const handleChange = (e) => {
    const val = field.type === 'number' ? +e.target.value : e.target.value;
    const updatedBlock = {
      ...selectedBlock,
      settings: { ...selectedBlock.settings, [field.name]: val },
    };
    setTemplates((prev) => updateBlock(prev, updatedBlock));
  };

  const renderControl = () => {
    if (field.type === 'textarea') {
      return (
        <textarea
          className={styles.settings__control}
          value={value}
          placeholder={field.name.includes('Link') ? '#' : STATIC_URL}
          onChange={handleChange}
        />
      );
    }
    if (field.type === 'select') {
      return (
        <select
          className={styles.settings__control}
          value={value}
          onChange={handleChange}
        >
          {field.options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      );
    }
    return (
      <input
        className={styles.settings__control}
        type={field.type}
        value={value}
        onChange={handleChange}
      />
    );
  };

  return (
    <div className={styles.settings__field}>
      <div className={styles.settings__label}>{field.label}</div>
      {renderControl()}
    </div>
  );
};
