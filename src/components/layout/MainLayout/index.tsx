import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import clsx from 'clsx';

import { State } from '../../../store';
import Titlebar from '../Titlebar';
import Sidebar from '../Sidebar';
import Searchbar from '../Toolbar';

import AllBooks from '../../../pages/AllBooks';

import styles from './MainLayout.module.scss';

const MainLayout: React.FC = () => {
  const platform = useSelector((state: State) => state.app.platform);

  return (
    <div
      className={clsx({
        [styles.isDarwin]: platform == 'darwin',
        [styles.mainLayout]: true,
      })}
    >
      {platform === 'darwin' && (<Titlebar />)}

      <Searchbar />

      <div className={styles.columnLayout}>
        <Sidebar />

        <div className={styles.rightSide}>
          <Routes>
            <Route path='/' element={<AllBooks />} />
            <Route path='/wishlist' element={<AllBooks />} />
            <Route path='/currently-reading' element={<AllBooks />} />
            <Route path='/not-read-yet' element={<AllBooks />} />
            <Route path='/books-read' element={<AllBooks />} />
            <Route path='/statistics' element={<AllBooks />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
