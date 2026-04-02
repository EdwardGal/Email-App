import { memo, useState } from 'react';
import styles from './menu.module.scss';
import { MENU_DATA } from '../../utils/constants';
import { MenuItem } from './MenuItem';

export const Menu = memo(() => {
  const [menuActive, setMenuActive] = useState(0);

  return (
    <aside className={styles.menu}>
      <div className={styles.menu__title}>
        <span className={`${styles['menu__title-logo']} material-symbols-outlined`}>dashboard</span>
        <span className={styles['menu__title-label']}>Блоки и шаблоны</span>
      </div>

      <ul className={styles.menu__nav}>
        {MENU_DATA.map(({ category, icon, elems }, index) => (
          <li
            key={category}
            className={`${styles.menu__item} ${menuActive === index ? styles['is-active'] : ''}`}
          >
            <button className={styles.menu__btn} type="button" onClick={() => setMenuActive(index)}>
              <span className={`${styles.menu__icon} material-symbols-outlined`}>{icon}</span>
              <span className={styles.menu__label}>{category}</span>
              <span className={`${styles.menu__chevron} material-symbols-outlined`}>
                keyboard_arrow_down
              </span>
            </button>
            <ul className={`${styles.options} ${styles.menu__options}`}>
              {elems.map((elem) => (
                <MenuItem key={elem.type} {...elem} />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
});
