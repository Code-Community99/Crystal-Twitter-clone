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

const users = [
  {
    name: 'Dalmas Ogembo',
    handle: '@alpha',
    followers: '2000',
    following: '1300',
    quote: 'Some quote',
    followed_by: 'Somebody Omabere'
  },
  {
    name: 'Quality Works',
    handle: '@quality',
    followers: '2000',
    following: '1300',
    quote: 'Some quote',
    followed_by: 'Somebody Omabere'
  },
  {
    name: 'Shamaldas Rancho',
    handle: '@shamaldas',
    followers: '2000',
    following: '1300',
    quote: 'Some quote',
    followed_by: 'Somebody Omabere'
  },
  {
    name: 'Raider Dante',
    handle: '@raider',
    followers: '2000',
    following: '1300',
    quote: 'Some quote',
    followed_by: 'Somebody Omabere'
  },
]

const tweets = [
  {
    user: {
      name: 'Raider Dante',
      handle: '@raider',
      followers: '2000',
      following: '1300',
      quote: 'Some quote',
      followed_by: 'Somebody Omabere'
    },
    tweet_data: {
      text: 'Start your \nown web hosting business.Our reseller http://mango.ke hosting plans are the perfect choice for your \nreseller business. They all https://mango.ke, https://maidentcleaning.co.ke come \nwith cPanel/WHM the leading control panel in the web hosting industry https://maidentcleaning.co.ke/office-cleaning-services/ https://mango.ke/web-hosting/ virdis.co.ke',
      images: [
        'http://placeimg.com/1200/800/nature',
        'http://placeimg.com/800/1200/nature',
        'http://placeimg.com/1920/1080/nature',
        'http://placeimg.com/1500/500/nature',
      ],
      videos: [
        'https://www.youtube.com/watch?v=tWxYqHv5BJo'
      ],
      mp4: [],
      gif: [],
      tweet_type: 'normal'
    }
  },
  {
    user: {
      name: 'Dalmas Ogembo',
      handle: '@raider',
      followers: '2000',
      following: '1300',
      quote: 'Some quote',
      followed_by: 'Somenna Ohge'
    },
    tweet_data: {
      text: '\n\nDalmas \n Shamaldas\n \nDante \n\t Ranchodas \n',
      images: [
        'http://placeimg.com/1920/1080/nature',
        'http://placeimg.com/1500/500/nature',
      ],
      videos: [
        'https://www.youtube.com/watch?v=tWxYqHv5BJo'
      ],
      mp4: [],
      gif: [],
      tweet_type: 'normal'
    }
  },
  {
    user: {
      name: 'Raider Dante',
      handle: '@raider',
      followers: '2000',
      following: '1300',
      quote: 'Some quote',
      followed_by: 'Somebody Omabere'
    },
    tweet_data: {
      text: 'Our reseller hosting plans are the perfect choice for your \nreseller business. They all https://mango.ke, come \nwith cPanel/WHM the leading control panel in the web hosting industry https://mango.ke/web-hosting/',
      images: [
        'http://placeimg.com/1200/800/nature',
      ],
      videos: [
        'https://www.youtube.com/watch?v=tWxYqHv5BJo'
      ],
      mp4: [],
      gif: [],
      tweet_type: 'retweet'
    }
  }
]

export { routes, moreLinks, users, tweets }