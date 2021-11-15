import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import { State } from '../../../store';
import SearchBox from './SearchBox';

import styles from './Toolbar.module.scss';

const Toolbar: React.FC = () => {
  const platform = useSelector((state: State) => state.app.platform);

  return (
    <div
      className={clsx({
        [styles.toolbar]: true,
        [styles.darwin]: platform === 'darwin',
      })}
    >
      <div>New book</div>

      <SearchBox />

      <div>Settings</div>
    </div>
  );
};

export default Toolbar;
