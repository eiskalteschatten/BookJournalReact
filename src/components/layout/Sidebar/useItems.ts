import { useTranslation } from 'react-i18next';
import { Props as SidebarItemProp } from './SidebarItem';

import { ReactComponent as AllBooks } from '../../../assets/images/si-glyph-bookcase.svg';
import { ReactComponent as WishList } from '../../../assets/images/si-glyph-bullet-checked-list.svg';
import { ReactComponent as CurrentlyReading } from '../../../assets/images/si-glyph-book-open.svg';
import { ReactComponent as NotReadYet } from '../../../assets/images/si-glyph-bookmark.svg';
import { ReactComponent as BooksRead } from '../../../assets/images/si-glyph-square-checked.svg';
import { ReactComponent as Statistics } from '../../../assets/images/si-glyph-chart-piece.svg';

const useItems = (): SidebarItemProp[] => {
  const { t } = useTranslation(['sidebar']);

  return [
    {
      path: '/',
      ItemIcon: AllBooks,
      title: t('sidebar:allBooks'),
    },
    {
      path: '/wishlist',
      ItemIcon: WishList,
      title: t('sidebar:wishlist'),
      marginBottom: true,
    },
    {
      path: '/currently-reading',
      ItemIcon: CurrentlyReading,
      title: t('sidebar:currentlyReading'),
    },
    {
      path: '/not-read-yet',
      ItemIcon: NotReadYet,
      title: t('sidebar:notReadYet'),
    },
    {
      path: '/books-read',
      ItemIcon: BooksRead,
      title: t('sidebar:booksRead'),
      marginBottom: true,
    },
    {
      path: '/statistics',
      ItemIcon: Statistics,
      title: t('sidebar:statistics'),
    },
  ];
};

export default useItems;
