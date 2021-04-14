import React, { forwardRef, useCallback, useEffect, useState } from 'react'
import { Avatar, IconButton, Button } from '@material-ui/core';
import { Popover } from 'uiw';
import { IoEllipsisHorizontal, IoHeart } from 'react-icons/io5';
import { IoIosCloseCircle, IoIosCog, IoIosSearch, IoIosShare, IoIosShareAlt } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { users } from '../../constants/Constants';
import { FaRetweet, FaCommentAlt, FaComment, FaChartBar, FaLink } from 'react-icons/fa';
import ImageViewer from 'react-simple-image-viewer';
import ReactPlayer from 'react-player/lazy';
import { Anchorme } from 'react-anchorme';
import { useSelector } from 'react-redux';
import { selectColour } from './../../../features/display/DisplaySlice';

const cheerio = require('cheerio');
const getUrls = require('get-urls');

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

      {/* <div className="main-layout-right-fixed"> */}
      <RightSideBar header={header}>
        {
          children
        }
      </RightSideBar>
      {/* </div> */}
    </div>
  )
}

const MainLayoutHeader = ({ pagetitle, tagline, icon, divider }) => {
  return (
    <div className={`main-layout-left-header`}>
      <div className="main-layout-header-top">
        <div>
          <h2>{pagetitle}</h2>
          <p className="main-layout-header-top-tag-line">{tagline}</p>
        </div>
        {
          icon &&
          <IconButton className="main-layout-header-top-btn" title="settings">
            {icon}
          </IconButton>
        }

      </div>
      {
        divider &&
        <div className="divider" />
      }
    </div>
  )
}

const MainLayoutCustomHeader = ({ newclass, children, divider }) => {
  return (
    <div className={`main-layout-left-header`}>
      <div className={`inner-main-div ${newclass}`}>
        {children}
        {
          divider &&
          <div className="divider" />
        }
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
  const colour = useSelector(selectColour)
  return (
    <div className="right-sidebar-component-header">
      <div className="twitter-search-component">

        {/* <Popover trigger="click" placement="bottom" content={<TwitterSearchContent />}> */}
        <div className="twitter-search-component-wrapper">
          <IoIosSearch size={26} className="twitter-search-component-search-icon" />
          <Popover trigger="focus" placement="bottom" content={<TwitterSearchContent />} className="search-results-popover" style={{ background: colour.bg, color: colour.global_colour }}>
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
  const colour = useSelector(selectColour)
  return (
    <div>
      <div className="who-to-follow">
        <div>
          <Popover trigger="hover" delay={{ show: 1000, hide: 4000 }} placement="bottom" autoAdjustOverflow={true} visibleArrow={false} usePortal={true} content={<WhoToFollowHoverPopover ref={ref} user={user} />} className="who-to-follow-popover-inner" style={{ background: colour.bg }}>
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

const TweetCard = ({ user, tweetdata }, ref) => {

  const [urls, setUrls] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const str_ = tweetdata?.text;

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {

    let _urls = null;
    if (str_ !== undefined) {
      _urls = getUrls(str_)
    }
    const urls_ = []
    _urls && _urls.forEach((link) => {
      urls_.push(link)
    })
    setUrls(urls_);
  }, [])

  return (
    <div className="tweet-card">
      {
        tweetdata?.tweet_type === 'retweet' &&
        <div className="tweet-card-top-bar">
          <div className="tweet-card-top-bar-icon">
            <FaRetweet />
          </div>
          <p>Retweet</p>
        </div>
      }
      <div className="tweet-card-bottom-bar">
        <div className="tweet-card-bottom-bar-left">
          <Popover trigger="hover" delay={{ show: 1000, hide: 2000 }} placement="bottom" autoAdjustOverflow={true} visibleArrow={false} usePortal={true} content={<WhoToFollowHoverPopover ref={ref} user={user} />} className="who-to-follow-popover-inner">
            <Avatar>
              D
          </Avatar>
          </Popover>
        </div>
        <div className="tweet-card-bottom-bar-right">
          <div className="tweet-card-bottom-bar-right-header">
            <Popover trigger="hover" delay={{ show: 1000, hide: 2000 }} placement="bottom" autoAdjustOverflow={true} visibleArrow={false} usePortal={true} content={<WhoToFollowHoverPopover ref={ref} user={user} />} className="who-to-follow-popover-inner">
              <h3> {user?.name} </h3>
            </Popover>
            <p>{user?.handle} . Mar 20</p>
            <IoEllipsisHorizontal className="tweet-icon" />
          </div>
          <div className="tweet-card-bottom-bar-right-body">
            <div className="tweet-card-bottom-bar-right-body-text">
              <Anchorme>
                {
                  tweetdata?.text
                }
              </Anchorme>
            </div>

            {
              urls && urls.map((link) => {
                return <LinkPreview key={link} url_={link} />
              })
            }

            {tweetdata?.videos &&
              <div className="tweet-card-bottom-bar-right-body-video">
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=tWxYqHv5BJo"
                  className="tweet-video"
                  playIcon={true}
                  controls={true}
                  width="100%"
                  height="100%" />
              </div>
            }

            {tweetdata?.images &&
              <div className="tweet-card-bottom-bar-right-body-images">
                {tweetdata?.images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width="300"
                    style={{ margin: '2px' }}
                    loading='lazy'
                    alt="" />
                ))}

                {isViewerOpen && (
                  <ImageViewer
                    src={tweetdata?.images}
                    currentIndex={currentImage}
                    onClose={closeImageViewer}
                    className="tweet-card-bottom-bar-right-body-images-viewer"
                  />
                )}
              </div>
            }

          </div>
          <div className="tweet-card-bottom-bar-right-footer">
            <div className="tweet-card-bottom-bar-right-footer-actions">
              <ActionButton icon={<FaComment size={18} />} count="21" />
              <ActionButton icon={<FaRetweet size={18} />} count="12" />
              <ActionButton icon={<IoHeart size={18} />} count="45" />
              <ActionButton icon={<IoIosShare size={18} />} count="34" />
              {
                tweetdata?.tweet_type === 'normal' &&
                <ActionButton icon={<FaChartBar size={18} />} />
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


const LinkPreview = ({ url_ }) => {

  const [metaData, setMetaData] = useState(null);
  console.log('_____URL ', url_)

  useEffect(() => {
    try {
      fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url_)}`)
        .then(response => {
          if (response.ok) return response.json()
          throw new Error('Network response was not ok.')
        })
        .then(data => {
          const $ = cheerio.load(data.contents);
          const meta = {
            "site_name": $('meta[property="og:site_name"]').attr('content'),
            "site_url": $('link[rel="canonical"]').attr('href'),
            "site_description": $('meta[property="og:description"]').attr('content'),
            "site_title": $('meta[property="og:title"]').attr('content') || $('title').text(),
            "site_image": $('meta[property="og:image"]').attr('content'),
          }
          setMetaData(meta);
        });
    } catch (error) {
      console.log('___LINK PREVIEW ERROR___', error)
    }
  }, [])

  return (
    <a href={metaData?.site_url} target="_blank" rel="noreferrer" className="tweet-card-bottom-bar-right-body-link-review">
      <div className="tweet-card-bottom-bar-right-body-link-review-thumbnail">
        <img src={metaData?.site_image} loading="lazy" alt="some mine" />
      </div>
      <div className="tweet-card-bottom-bar-right-body-link-review-meta">
        <p className="title">
          {
            metaData?.site_title
          }
        </p>
        <p className="description">
          {metaData?.site_description?.split(' ').slice(0, 15).join(' ')}
        </p>
        <a href={metaData?.site_url} className="link" rel="norefferer">
          <FaLink className="link-icon" />{metaData?.site_url}
        </a>
      </div>
    </a>
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
}