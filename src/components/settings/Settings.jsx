import styles from "./settings.module.scss";
import { Empty } from '../empty/Empty';
import { SettingsField } from './SettingsField';
import { memo } from 'react';

export const Settings = ({ activeTemplate, setTemplates }) => {


  function updateBlock(templates, updatedBlock) {
    return templates.map((block) =>
      block.id === updatedBlock.id ? updatedBlock : block
    );
  }

  const handleChange = (e) => {
    const { id, value, type } = e.target;
    const nextValue = type === 'number' ? Number(value) : value;

    const updatedTemplate = {
      ...activeTemplate,
      settings: { ...activeTemplate.settings, [id]: nextValue },
    };
    setTemplates((prev) => updateBlock(prev, updatedTemplate));
  }

  return (
    <section className={styles.settings}>
      {!activeTemplate
        ? <Empty icon="touch_app" title="Выберите блок" text="Кликните по блоку в песочнице, чтобы настроить его" />
        : activeTemplate.fields.map((field) => (
          <SettingsField
            key={field.name}
            value={activeTemplate.settings[field.name]}
            {...field}
            handleChange={handleChange}
          />
        ))
      }
    </section>
  )
}
