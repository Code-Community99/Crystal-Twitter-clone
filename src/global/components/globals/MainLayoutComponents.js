import React, { forwardRef } from 'react'
import { Avatar, IconButton, Button } from '@material-ui/core';
import { Popover } from 'uiw';
import { IoEllipsisHorizontal, IoHeart } from 'react-icons/io5';
import { IoIosCloseCircle, IoIosCog, IoIosSearch, IoIosShare, IoIosShareAlt } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { users } from '../../constants/Constants';
import { FaRetweet, FaCommentAlt, FaComment, FaChartBar } from 'react-icons/fa';


const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {children}
    </div>
  )
}

const MainLayoutLeft = ({ children }) => {
  return (
    <div className="main-layout-left">

      <MainLoyoutLeftBody>
        {children}
      </MainLoyoutLeftBody>

    </div>
  )
}

const MainLayoutRight = ({ header, children, newclass }) => {
  return (
    <div className={`main-layout-right ${newclass}`}>
      <RightSideBar header={header}>
        {
          children
        }
      </RightSideBar>
    </div>
  )
}

const MainLayoutHeader = ({ pagetitle, icon, newclass }) => {
  return (
    <div className={`main-layout-left-header ${newclass}`}>
      <div className="main-layout-header-top">
        <h2>{pagetitle}</h2>
        {
          icon &&
          <IconButton className="main-layout-header-top-btn" title="settings">
            {icon}
          </IconButton>
        }
      </div>
    </div>
  )
}

const MainLayoutCustomHeader = ({ newclass, children }) => {
  return (
    <div className={`main-layout-left-header`}>
      <div className={`${newclass}`}>
        {children}
      </div>
    </div >
  )
}

const MainLoyoutLeftBody = ({ children }) => {
  return (
    <div className="main-layout-body">
      {
        children
      }
    </div>
  )
}

const RightSideBar = ({ header, children }) => {
  return (
    <div className="right-sidebar-component">
      {
        header &&
        <RightSidebarSearchHeader />
      }
      <div className="right-sidebar-component-body">

        {
          children
        }

      </div>
    </div>
  )
}

const RightSidebarSearchHeader = () => {
  return (
    <div className="right-sidebar-component-header">
      <div className="twitter-search-component">

        {/* <Popover trigger="click" placement="bottom" content={<TwitterSearchContent />}> */}
        <div className="twitter-search-component-wrapper">
          <IoIosSearch size={26} className="twitter-search-component-search-icon" />
          <Popover trigger="focus" placement="bottom" content={<TwitterSearchContent />} className="search-results-popover">
            <input className="twitter-search-component-input" placeholder="Search Twitter" />
          </Popover>
          <IoIosCloseCircle size={26} className="twitter-search-component-cancel-icon" />
        </div>
        {/* </Popover> */}

      </div>
    </div>
  )
}

const TwitterSearchContent = () => {
  return (
    <div className="twitter-search-component-results">
      <p className="keywords text-center">Try searching for people, topics, or keywords</p>
    </div>
  )
}

const RightSidebarTwitterTrends = () => {
  return (
    <TwitterRightSidebarCommon title="Trends for you" right_icon={true}>
      <Trend title="Dear IMF" subtitle="Trending in Kenya" tweets="15.7K" />
      <Trend title="IMF EXECUTIVE BOARD" subtitle="Trending in Kenya" tweets="15.8K" />
      <Trend title="#RutoVsThePeople" subtitle="Trending in Kenya" tweets="5,618" />
      <Trend title="#museveni" subtitle="Trending in Kenya" tweets="2,256" />
    </TwitterRightSidebarCommon>
  )
}

const RightSidebarTwitterWhoToFollow = () => {
  return (
    <TwitterRightSidebarCommon title="Who to follow" right_icon={false}>
      {
        users.map((user, index) => {
          return (
            <WhoToFollow user={user} />
          )
        })
      }
    </TwitterRightSidebarCommon>
  )
}


const TwitterRightSidebarCommon = ({ title, right_icon, children }) => {
  return (
    <div className="right-sidebar-component-body-common">

      <div className="right-sidebar-component-body-common-header">
        <h2>{title}</h2>
        {
          right_icon &&
          <IconButton className="trends-settings">
            <IoIosCog />
          </IconButton>
        }
      </div>
      <div className="divider" />
      <div className="right-sidebar-component-body-common-body">
        {
          children
        }
      </div>

      <div className="right-sidebar-component-body-common-footer">
        <p>Show more</p>
      </div>

    </div>
  )
}

const Trend = ({ subtitle, title, tweets }) => {
  return (
    <div>
      <div className="twitter-trend">
        <div className="trend-data">
          <p> {subtitle} </p>
          <h3> {title} </h3>
          <p> {tweets} Tweets</p>
        </div>
        <IconButton className="trend-elipsis">
          <IoEllipsisHorizontal />
        </IconButton>
      </div>
      <div className="divider" />
    </div>
  )
}

const WhoToFollow = ({ user }, ref) => {
  return (
    <div>
      <div className="who-to-follow">
        <div>
          <Popover trigger="click" placement="bottom" content={<WhoToFollowHoverPopover ref={ref} user={user} />} className="who-to-follow-popover-inner">
            <div className="who-to-follow-start">
              <Avatar className="who-to-follow-start-avatar capitalize">
                {user?.name[0]}
              </Avatar>
              <div className="who-to-follow-start-details">
                <h3> {user?.name} </h3>
                <p> {user?.handle} </p>
              </div>
            </div>
          </Popover>
        </div>
        <div className="who-to-follow-end">
          <Button className="follow-btn">
            Follow
          </Button>
        </div>
      </div>
      <div className="divider" />
    </div>
  )
}
const WhoToFollowHoverPopover = forwardRef(({ user }, ref) => {
  console.log("USER=>", user)
  return (
    <div className="who-to-follow-popover">
      <div className="clear-fix" />
      <div className="w-100">
        <div className="who-to-follow-popover-header">
          <Avatar className="who-to-follow-popover-header-avatar capitalize">
            {user?.name[0]}
          </Avatar>
          <Button className="who-to-follow-popover-header-follow-btn">
            Follow
        </Button>
        </div>
        <div className="who-to-follow-popover-details">
          <h3> {user?.name} </h3>
          <p> {user?.handle} </p>
        </div>
        <div className="who-to-follow-popover-followers-following">
          <div className="who-to-follow-popover-followers-following-follow">
            <h3> {user?.following} <span>Following</span></h3>
          </div>
          <div className="who-to-follow-popover-followers-following-follow">
            <h3> {user?.followers} <span>Followers</span> </h3>
          </div>
        </div>
        <div className="who-to-follow-popover-quote">
          <p> {user?.quote} </p>
        </div>
        <div className="who-to-follow-popover-footer">
          <Avatar className="who-to-follow-popover-footer-avatar capitalize">
            {user?.followed_by[0]}
          </Avatar>
          <p>Followed by {user?.followed_by}</p>
        </div>
        <div className="clear-fix" />
      </div>
    </div>
  )
})


const RightSidebarFooter = () => {
  return (
    <div className="right-sidebar-component-body-footer">
      <div className="right-sidebar-component-body-footer-top">
        <Link className="right-sidebar-link">
          Terms of Service
            </Link>
        <Link className="right-sidebar-link">
          Privacy Policy
            </Link>
        <Link className="right-sidebar-link">
          Cookie Policy
            </Link>
      </div>
      <div className="right-sidebar-component-body-footer-bottom">
        <Link className="right-sidebar-link">
          Ads info
            </Link>
        <Link className="right-sidebar-link">
          More
              <IoEllipsisHorizontal className="right-sidebar-link-icon" />
        </Link>
        <p>
          &copy; 2021 Twitter, Inc.
            </p>
      </div>
    </div>
  )
}

const ReTweetCard = () => {
  const str = 'Start your own web hosting business. Our reseller hosting plans are the perfect choice for your reseller business. They all come with cPanel/WHM the leading control panel in the web hosting industry';
  return (
    <div className="tweet-card">
      <div className="tweet-card-top-bar">
        <div className="tweet-card-top-bar-icon">
          <FaRetweet />
        </div>
        <p>Retweet</p>
      </div>
      <div className="tweet-card-bottom-bar">
        <div className="tweet-card-bottom-bar-left">
          <Avatar>
            D
          </Avatar>
        </div>
        <div className="tweet-card-bottom-bar-right">
          <div className="tweet-card-bottom-bar-right-header">
            <h3>Mango hosting and domain company</h3>
            <p>@Mango_hosting . Mar 20</p>
            <IoEllipsisHorizontal className="tweet-icon" />
          </div>
          <div className="tweet-card-bottom-bar-right-body">
            <p className="tweet-card-bottom-bar-right-body-text">
              Get the Best and Secured Web Hosting at Kes 1499/yr. 10 GB Web Space, Free SSL Certificate, Unlimited Email Accounts, Unlimited Sub Domains, Free Backups and many more. For Order and More information, Visit our Website: https://mango.ke
            </p>
            <div className="tweet-card-bottom-bar-right-body-link-review">
              <div className="tweet-card-bottom-bar-right-body-link-review-thumbnail">
                <img src="https://mango.ke/wp-content/uploads/2020/11/logomango.png" alt="some mine" />
              </div>
              <div className="tweet-card-bottom-bar-right-body-link-review-meta">
                <p className="title">
                  Mango hosting limited
                </p>
                <p className="description">
                  {str.split(' ').slice(0, 15).join(' ')}...
                </p>
              </div>
            </div>
          </div>
          <div className="tweet-card-bottom-bar-right-footer">
            <div className="tweet-card-bottom-bar-right-footer-actions">

              <ActionButton icon={<FaComment size={18} />} count="21" />
              <ActionButton icon={<FaRetweet size={18} />} count="12" />
              <ActionButton icon={<IoHeart size={18} />} count="45" />
              <ActionButton icon={<IoIosShare size={18} />} count="34" />
              <ActionButton icon={<FaChartBar size={18} />} />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TweetCard = () => {
  const str = 'Start your own web hosting business. Our reseller hosting plans are the perfect choice for your reseller business. They all come with cPanel/WHM the leading control panel in the web hosting industry';
  return (
    <div className="tweet-card">
      <div className="tweet-card-bottom-bar">
        <div className="tweet-card-bottom-bar-left">
          <Popover trigger="hover" content={<ProfilePreview/>} placement="bottom">

              <Avatar>
                D
              </Avatar>
          </Popover>
        </div>
        <div className="tweet-card-bottom-bar-right">
          <div className="tweet-card-bottom-bar-right-header">
            <h3>Mango hosting and domain company</h3>
            <p>@Mango_hosting . Mar 20</p>
            <IoEllipsisHorizontal className="tweet-icon" />
          </div>
          <div className="tweet-card-bottom-bar-right-body">
            <p className="tweet-card-bottom-bar-right-body-text">
              Get the Best and Secured Web Hosting at Kes 1499/yr. 10 GB Web Space, Free SSL Certificate, Unlimited Email Accounts, Unlimited Sub Domains, Free Backups and many more. For Order and More information, Visit our Website: https://mango.ke
            </p>
            <div className="tweet-card-bottom-bar-right-body-link-review">
              <div className="tweet-card-bottom-bar-right-body-link-review-thumbnail">
                <img src="https://mango.ke/wp-content/uploads/2020/11/logomango.png" alt="some mine" />
              </div>
              <div className="tweet-card-bottom-bar-right-body-link-review-meta">
                <p className="title">
                  Mango hosting limited
                </p>
                <p className="description">
                  {str.split(' ').slice(0, 15).join(' ')}...
                </p>
              </div>
            </div>
          </div>
          <div className="tweet-card-bottom-bar-right-footer">
            <div className="tweet-card-bottom-bar-right-footer-actions">

              <ActionButton icon={<FaComment size={18} />} count="21" />
              <ActionButton icon={<FaRetweet size={18} />} count="12" />
              <ActionButton icon={<IoHeart size={18} />} count="45" />
              <ActionButton icon={<IoIosShare size={18} />} count="34" />

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const ActionButton = ({ icon, count }) => {
  return (
    <div className="tweet-card-bottom-bar-right-footer-action">
      <div className="action-icon">
        <IconButton className="action-icon-btn">
          {icon}
        </IconButton>
      </div>
      <div className="action-text">
        {count}
      </div>
    </div>
  )
}
const ProfilePreview = ()=>{
    return (
      <div className="hover-profile">
      <div className="top-profile">
        <img src="./pp.png" alt="Duncan" />
        <button> Following </button>
      </div>
      <p className="name-info">
        <span> Duncan</span> <br/>
        @codmoste
      </p>
      <p className="hover-content">
        Hello world, Good morining. I`m an a senior developer at crystal technologies. I am a big fun of hip hop music.
      </p>
      <p className="profile-tags">
      #coding #Programming
      </p>
      <div className="follow-tally">
        <p>
            2k <span> Following</span>
        </p>

        <p>
            2k <span> Followers</span>
        </p>
      </div>
      <div className="follower-peek">
            <p>
              <img src="./pp.png" className="photo-prev" alt=""/>
              <img src="./pp.png" className="photo-prev" alt=""/>
            </p>
            <p>
              Followed by dalsmasshamaldas, stevec kamash and 250 others
            </p>
      </div>
    </div>
  )
}
export {
  MainLayout,
  MainLayoutHeader,
  MainLayoutCustomHeader,
  MainLayoutLeft,
  MainLayoutRight,
  RightSideBar,
  RightSidebarSearchHeader,
  RightSidebarTwitterTrends,
  RightSidebarTwitterWhoToFollow,
  RightSidebarFooter,

  TweetCard,
  ReTweetCard,
  ProfilePreview,
}
