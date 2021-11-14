import path from 'path';
import os from 'os';

let storagePath = '';

switch (process.platform) {
  case 'darwin':
    storagePath = path.join(os.homedir(), 'Library', 'Application Support', 'BookJournal');
    break;
  case 'win32':
    storagePath = path.join(os.homedir(), 'AppData', 'Roaming', 'Alex Seifert', 'BookJournal');
    break;
  default:
    storagePath = path.join(os.homedir(), '.bookjournal');
    break;
}

export default {
  app: {
    name: 'BookJournal',
    version: '2.0.0',
    storagePath,
  },
  updates: {
    url: 'https://api.github.com/repos/eiskalteschatten/BookJournalReact/releases',
  },
  intl: {
    defaultLocale: 'en',
  },
};
