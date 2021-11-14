import useTranslation from '../../../intl/useTranslation';
import { Props as SidebarItemProp } from './SidebarItem';

import { ReactComponent as AllBooks } from '../../../assets/images/si-glyph-bookcase.svg';
import { ReactComponent as WishList } from '../../../assets/images/si-glyph-bullet-checked-list.svg';
import { ReactComponent as CurrentlyReading } from '../../../assets/images/si-glyph-book-open.svg';
import { ReactComponent as NotReadYet } from '../../../assets/images/si-glyph-bookmark.svg';
import { ReactComponent as BooksRead } from '../../../assets/images/si-glyph-square-checked.svg';
import { ReactComponent as Statistics } from '../../../assets/images/si-glyph-chart-piece.svg';

const useItems = (): SidebarItemProp[] => ([
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
]);

export default useItems;
