import { FaBars, FaCalendar, FaChartPie, FaCog, FaDashcube, FaPallet, FaUser } from 'react-icons/fa';

const routes = [
  {
    icon: <FaDashcube />,
    title: 'Home',
    to: '/'
  },
  {
    icon: <FaPallet />,
    title: 'Explore',
    to: './explore'
  },
  {
    icon: <FaBars />,
    title: 'Notifications',
    to: '/notifications'
  },
  {
    icon: <FaCalendar />,
    title: 'Bookmarks',
    to: '/bookmarks'
  },
  {
    icon: <FaChartPie />,
    title: 'Lists',
    to: '/lists'
  },
  {
    icon: <FaUser />,
    title: 'Profile',
    to: '/profile'
  },
  {
    icon: <FaCog />,
    title: 'Topics',
    to: '/topics'
  },
  {
    icon: <FaUser />,
    title: 'Moments',
    to: '/moments'
  },
  {
    icon: <FaUser />,
    title: 'News letter',
    to: '/news-letter'
  },
  {
    icon: <FaUser />,
    title: 'Twitter ads',
    to: '/twitter-ads'
  },
  {
    icon: <FaUser />,
    title: 'Analytics',
    to: '/analytics'
  },
  {
    icon: <FaUser />,
    title: 'Settings and privacy',
    to: '/settings-and-privacy'
  },
  {
    icon: <FaUser />,
    title: 'Help center',
    to: '/help-center'
  },
  {
    icon: <FaUser />,
    title: 'Display',
    to: '/display'
  },
  {
    icon: <FaUser />,
    title: 'Keyboard shortcuts',
    to: '/keyboard-shortcuts'
  },
]

export { routes }