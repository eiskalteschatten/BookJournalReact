import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import clsx from 'clsx';

import { State } from '../../../store';
import Titlebar from '../Titlebar';
import Sidebar from '../Sidebar';

import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  const platform = useSelector((state: State) => state.app.platform);

  return (
    <div
      className={clsx({
        [styles.isDarwin]: platform === 'darwin',
        [styles.mainLayout]: true,
      })}
    >
      {platform === 'darwin' && (<Titlebar />)}

      <Sidebar />

      <div className={styles.rightSide}>
        <Routes>
          <Route path='/' element={
            <div>
              right side
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
};

export default MainLayout;
