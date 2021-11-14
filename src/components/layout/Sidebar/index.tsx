import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { State } from '../../../store';
import SidebarItem from './SidebarItem';
import SidebarDragger from './SidebarDragger';
import sidebarItems from './items';

import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const platform = useSelector((state: State) => state.app.platform);
  const savedSidebarWidth = useSelector((state: State) => state.ui.width);
  const [sidebarWidth, setSidebarWidth] = useState<number | undefined>(savedSidebarWidth);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setSidebarWidth(savedSidebarWidth);
  }, [savedSidebarWidth]);

  return (
    <div
      className={clsx({
        [styles.sidebar]: true,
        [styles.darwin]: platform === 'darwin',
      })}
      style={{ flex: `0 0 ${sidebarWidth}px` }}
      ref={sidebarRef}
    >
      <div>
        {sidebarItems.map((item, index: number) => (
          <SidebarItem
            key={index}
            path={`${pathname}${item.path}`}
            ItemIcon={item.ItemIcon}
            title={item.title}
          />
        ))}

        <SidebarDragger
          sidebarRef={sidebarRef}
          setSidebarWidth={setSidebarWidth}
        />
      </div>
    </div>
  );
};

export default Sidebar;
