import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';

const App: React.FC = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='*' element={<MainLayout />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
