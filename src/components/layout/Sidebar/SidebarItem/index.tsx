import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

import styles from './SidebarItem.module.scss';

export interface Props {
  path: string;
  ItemIcon: React.FunctionComponent;
  title: string;
}

const SidebarItem: React.FC<Props> = ({ ItemIcon, title, path }) => {
  const { pathname } = useLocation();

  if (path.charAt(path.length -1) === '/') {
    path = path.slice(0, -1);
  }

  return (
    <Link
      to={path}
      className={clsx({
        [styles.sidebarItem]: true,
        [styles.selected]: pathname === path || !path && pathname === '/',
      })}
    >
      <div className={styles.icon}>
        <ItemIcon />
      </div>

      <span className={styles.text}>{title}</span>
    </Link>
  );
};

export default SidebarItem;
