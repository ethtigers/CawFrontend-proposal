import { PATH_DASHBOARD } from 'src/routes/paths';
import SvgIconStyle from 'src/components/SvgIconStyle';


const getIcon = (name: string) => (
  <SvgIconStyle src={`/icons/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

//* Get icons from https://icon-sets.iconify.design/
const ICONS = {
  home: getIcon('home-heart'),
  booking: getIcon('ic_booking'),
  explore: getIcon('hash'),
  notifications: getIcon('bell'),
  messages: getIcon('chat'),
  bookmark: getIcon('bookmark'),
  list: getIcon('list'),
  profile: getIcon('user'),
  more: getIcon('settings'),
};

const navConfig = [
  {
    subheader: '',
    items: [
      {
        title: 'sidebar_menu.home',
        path: PATH_DASHBOARD.app.home,
        icon: ICONS.home,
      },
      { title: 'sidebar_menu.explore', path: PATH_DASHBOARD.app.explore, icon: ICONS.explore },
      { title: 'sidebar_menu.notifications', path: PATH_DASHBOARD.app.notifications, icon: ICONS.notifications },
      { title: 'sidebar_menu.messages', path: PATH_DASHBOARD.app.messages, icon: ICONS.messages },
      { title: 'sidebar_menu.bookmarks', path: PATH_DASHBOARD.app.bookmarks, icon: ICONS.bookmark },
      { title: 'sidebar_menu.lists', path: PATH_DASHBOARD.app.lists, icon: ICONS.list },
      { title: 'sidebar_menu.profile', path: PATH_DASHBOARD.app.userProfile, icon: ICONS.profile },
      { title: 'sidebar_menu.more', path: PATH_DASHBOARD.app.settings, icon: ICONS.more },
    ],
  },
];

export default navConfig;
