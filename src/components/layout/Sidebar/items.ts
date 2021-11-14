import useTranslation from '../../../intl/useTranslation';
import { Props as SidebarItemProp } from './SidebarItem';

import AllBooks from '../../../assets/images/si-glyph-bookcase.svg';
import WishList from '../../../assets/images/si-glyph-bullet-checked-list.svg';
import CurrentlyReading from '../../../assets/images/si-glyph-book-open.sv.svg';
import NotReadYet from '../../../assets/images/si-glyph-bookmark.svg';
import BooksRead from '../../../assets/images/si-glyph-square-checked.svg';
import Statistics from '../../../assets/images/si-glyph-chart-piece.svg';

const sidebarItems: SidebarItemProp[] = [
  {
    path: '/',
    ItemIcon: AllBooks,
    title: useTranslation('sidebarAllBooks'),
  },
  {
    path: '/wishlist',
    ItemIcon: WishList,
    title: useTranslation('sidebarWishlist'),
  },
  // {
  //   type: 'spacing',
  // },
  {
    path: '/currently-reading',
    ItemIcon: CurrentlyReading,
    title: useTranslation('sidebarCurrentlyReading'),
  },
  {
    path: '/not-read-yet',
    ItemIcon: NotReadYet,
    title: useTranslation('sidebarNotReadYet'),
  },
  {
    path: '/books-read',
    ItemIcon: BooksRead,
    title: useTranslation('sidebarBooksRead'),
  },
  // {
  //   type: 'spacing',
  // },
  {
    path: '/statistics',
    ItemIcon: Statistics,
    title: useTranslation('sidebarStatistics'),
  },
];

export default sidebarItems;
