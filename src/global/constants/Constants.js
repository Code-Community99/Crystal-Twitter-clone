import { FaBars, FaCalendar, FaChartPie, FaCog, FaDashcube, FaHashtag, FaPallet, FaUser, FaBell, FaBookmark, FaList, FaCommentAlt, FaAd, FaChartBar, FaKeyboard } from 'react-icons/fa';
import { IoChatboxOutline, IoChatbubble, IoColorPalette, IoFlash, IoHelp, IoHelpCircle, IoHome, IoNewspaper } from 'react-icons/io5';
import { IoIosHelpCircleOutline, IoMdHelpCircleOutline } from 'react-icons/io';

const routes = [
  {
    icon: <IoHome />,
    title: 'Home',
    to: '/'
  },
  {
    icon: <FaHashtag />,
    title: 'Explore',
    to: './explore'
  },
  {
    icon: <FaBell />,
    title: 'Notifications',
    to: '/notifications'
  },
  {
    icon: <IoChatboxOutline size={20} />,
    title: 'Messages',
    to: '/messages'
  },
  {
    icon: <FaBookmark />,
    title: 'Bookmarks',
    to: '/bookmarks'
  },
  {
    icon: <FaList />,
    title: 'Lists',
    to: '/lists'
  },
  {
    icon: <FaUser />,
    title: 'Profile',
    to: '/profile'
  }
]

const moreLinks = [
  {
    icon: <FaCommentAlt />,
    title: 'Topics',
    to: '/topics'
  },
  {
    icon: <IoFlash />,
    title: 'Moments',
    to: '/moments'
  },
  {
    icon: <IoNewspaper />,
    title: 'News letter',
    to: '/news-letter'
  },
  {
    icon: <FaAd />,
    title: 'Twitter ads',
    to: '/twitter-ads'
  },
  {
    icon: <FaChartBar />,
    title: 'Analytics',
    to: '/analytics'
  },
  {
    icon: 'divider',
    title: 'divider',
    to: 'divider'
  },
  {
    icon: <FaCog />,
    title: 'Settings and privacy',
    to: '/settings-and-privacy'
  },
  {
    icon: <IoMdHelpCircleOutline size={20} />,
    title: 'Help center',
    to: '/help-center'
  },
  {
    icon: <IoColorPalette />,
    title: 'Display',
    to: '/display'
  },
  {
    icon: <FaKeyboard />,
    title: 'Keyboard shortcuts',
    to: '/keyboard-shortcuts'
  }
]

export { routes, moreLinks }