import useTranslation from '../../../intl/useTranslation';
import { Props as SidebarItemProp } from './SidebarItem';

const sidebarItems: SidebarItemProp[] = [
  {
    path: '/',
    ItemIcon: Info,
    title: useTranslation('projectInfo'),
  },
  {
    path: '/tasks',
    ItemIcon: CheckBox,
    title: useTranslation('tasks'),
  },
  {
    path: '/quick-notes',
    ItemIcon: Note,
    title: useTranslation('quickNotes'),
  },
  {
    path: '/bookmarks',
    ItemIcon: Bookmark,
    title: useTranslation('bookmarks'),
  },
  {
    path: '/kanban',
    ItemIcon: ViewWeek,
    title: useTranslation('kanbanBoard'),
  },
];

export default sidebarItems;
