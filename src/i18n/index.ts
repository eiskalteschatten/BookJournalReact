import i18n, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

import config from '../config';
import resources from './locales';

export const defaultConfig: InitOptions = {
  resources,
  defaultNS: 'common',
  fallbackLng: config.intl.defaultLocale,
  supportedLngs: config.intl.languages,
  preload: config.intl.languages,
  keySeparator: false,
  debug: process.env.NODE_ENV === 'development',
};

i18n
  .use(initReactI18next)
  .init({
    ...defaultConfig,
    lng: window.app.getLocale(),
  });

export default i18n;
