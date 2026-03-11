import { useState } from 'react';
import styles from './menu.module.scss';
import { MenuItem } from './MenuItem';

const MENU_HEADER = {
  icon: 'dashboard',
  title: 'Блоки и шаблоны',
};
const CHEVRON_ICON = 'keyboard_arrow_down';

export const Menu = ({ data }) => {
  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <aside className={styles.menu}>
      <div className={styles['menu__header-title']}>
        <span
          className={`${styles['menu__header-logo']} material-symbols-outlined`}
        >
          {MENU_HEADER.icon}
        </span>
        <span className={styles['menu__header-name']}>{MENU_HEADER.title}</span>
      </div>
      <ul className={styles.menu__nav}>
        {data.map((item, index) => (
          <li
            key={item.category}
            className={`${styles.menu__item} ${
              index === activeMenu ? styles['is-active'] : ''
            }`}
          >
            <button
              className={styles['menu__item-button']}
              type="button"
              onClick={() => setActiveMenu(index)}
            >
              <span
                className={`${styles['menu__item-icon']} material-symbols-outlined`}
              >
                {item.icon}
              </span>
              <span className={styles.menu__label}>{item.category}</span>
              <span
                className={`${styles['menu__item-chevron']} material-symbols-outlined`}
              >
                {CHEVRON_ICON}
              </span>
            </button>
            <ul className={`${styles.options} ${styles.menu__options}`}>
              {item.elems.map((elem) => (
                <MenuItem key={elem.type} {...elem} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};
