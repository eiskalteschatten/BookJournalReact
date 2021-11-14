import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import clsx from 'clsx';

import { State } from '../../../store';
import SidebarItem from './SidebarItem';
import SidebarDragger from './SidebarDragger';
import sidebarItems from './items';

import styles from './Sidebar.module.scss';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();
  const platform = useSelector((state: State) => state.app.platform);
  const savedSidebarWidth = useSelector((state: State) => state.ui.sidebarWidth);
  const projectInfo = useSelector((state: State) => state.project.projectInfo);
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
      <div className={styles.projectInfo}>
        {projectInfo.image && (
          <div className={styles.projectImageWrapper}>
            <img src={`data:${projectInfo.image.mimeType};base64,${projectInfo.image.image}`} className={styles.projectImage} />
          </div>
        )}

        {projectInfo.name ? (
          <div className={styles.projectName}>{projectInfo.name}</div>
        ) : (
          <div className={styles.projectName}>
            <FormattedMessage id='menuNewProject' />
          </div>
        )}
      </div>

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
