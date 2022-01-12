
import Blank from './pages/Blank';
// import Github from './pages/Github';
import Historys from './pages/History';
import Documents from './pages/Document';
import Navigation from './pages/Navigation';
import Linux from './pages/Linux';
import Search from './pages/Search';
import Todo from './pages/Todo';

export const getNavData = () => [
  // {
  //   title: '空白页',
  //   type: 'blank',
  //   component: Blank,
  // },
  {
    title: 'Navigation',
    type: 'navigation',
    component: Navigation,
  }, {
    title: 'Todo',
    type: 'todo',
    component: Todo,
  }, {
    title: 'Search',
    type: 'search',
    component: Search,
  }, {
    title: 'Command',
    type: 'linux',
    component: Linux,
  }, {
    title: 'Documents',
    type: 'document',
    component: Documents,
  },
  // {
  //   title: '趋势榜',
  //   type: 'trending',
  //   component: Github,
  // },
  {
    title: 'History',
    type: 'history',
    component: Historys,
  },
];
