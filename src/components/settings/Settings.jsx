import styles from './settings.module.scss';
import { EmptyAlert } from '../alerts/Empty';
import { SettingsField } from './SettingsField';

const EMPTY_STATE = {
  icon: 'touch_app',
  title: 'Выберите блок',
  text: 'Кликните по блоку на полотне, чтобы настроить его',
};

export const Settings = ({ selectedBlock, setTemplates }) => {
  return (
    <div className={styles.settings}>
      {!selectedBlock ? (
        <EmptyAlert {...EMPTY_STATE} />
      ) : (
        selectedBlock.settingsConfig.map((field) => (
          <SettingsField
            key={field.name}
            value={selectedBlock.settings[field.name]}
            field={field}
            selectedBlock={selectedBlock}
            setTemplates={setTemplates}
          />
        ))
      )}
    </div>
  );
};
