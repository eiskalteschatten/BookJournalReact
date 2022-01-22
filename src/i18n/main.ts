import { app } from 'electron';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import defaultConfig from './config';

i18n
  .use(initReactI18next)
  .init({
    ...defaultConfig,
    lng: app.getLocale(),
  });

export default i18n;
