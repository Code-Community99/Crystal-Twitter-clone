import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { moreLinks, routes } from '../../constants/Constants';
import './../../styles/Sidebar.css';
import { FaCheck, FaDotCircle, FaEllipsisH, FaTwitter } from 'react-icons/fa';
import { IoEllipsisHorizontal, IoEllipsisHorizontalCircleOutline } from 'react-icons/io5';

import { Avatar, Button, Card, IconButton } from '@material-ui/core'
import { Overlay, Popover } from 'uiw'
import { IoIosClose } from 'react-icons/io';
import { MenuLinks, MoreAccountOptions, MoreLinks } from './SidebarComponents';
import WriteTweet from '../home/HomeComponents';
import NewsLetters from './../../../pages/newsletter/NewsLetters';
import Display from './../../../pages/display/Display';
import { useSelector } from 'react-redux';
import { selectColour } from './../../../features/display/DisplaySlice';


function Sidebar() {

  const [moreActive, setMoreActive] = useState(false);
  const history = useHistory();

  const colour = useSelector(selectColour);

  const [tweetOverlay, setTweetOverlay] = useState(false);
  const [newsLetterOverlay, setnewsLetterOverlay] = useState(false);
  const [displayOverlay, setdisplayOverlay] = useState(false);
  const [keyboardOverlay, setkeyboardOverlay] = useState(false);

  return (
    <div className="sidebar">

      <Overlay isOpen={tweetOverlay} onClose={e => setTweetOverlay(prev => !prev)}>
        <div className="overlay-card-wrapper">
          <Card className="overlay-card">
            <div className="overlay-card-header">
              <div className="overlay-card-header-inner">
                <IconButton className="overlay-card-header-close-btn" onClick={e => setTweetOverlay(prev => !prev)}>
                  <IoIosClose size={40} className="overlay-card-header-close-icon" />
                </IconButton>
              </div>
              <div className="divider" />
            </div>
            <div className="overlay-card-body">
              <WriteTweet />
            </div>
          </Card>
        </div>
      </Overlay>

      <Overlay isOpen={newsLetterOverlay} onClose={e => setnewsLetterOverlay(prev => !prev)}>
        <div className="overlay-card-wrapper">
          <Card className="overlay-card fixed-height">
            <div className="overlay-card-header">
              <div className="overlay-card-header-inner">
                <IconButton className="overlay-card-header-close-btn" onClick={e => setnewsLetterOverlay(prev => !prev)}>
                  <IoIosClose size={40} className="overlay-card-header-close-icon" />
                </IconButton>
              </div>
            </div>
            <div className="overlay-card-body">
              <NewsLetters />
            </div>
          </Card>
        </div>
      </Overlay>

      <Overlay isOpen={displayOverlay} onClose={e => setdisplayOverlay(prev => !prev)}>
        <div className="overlay-card-wrapper">
          <Card className="overlay-card fixed-height" style={{ background: colour.bg }}>
            <div className="overlay-card-header">
              <div className="overlay-card-header-heading">
                <h2 style={{ color: colour.global_colour }}>Customize your view</h2>
              </div>
            </div>
            <div className="overlay-card-body">
              <Display />
            </div>
          </Card>
        </div>
      </Overlay>

      <div className="sidebar-sticky h-100">
        <div className="position-relative h-100">
          <div className="main-sidebar">

            <div className="twitter-logo">
              <IconButton className="twitter-btn" onClick={e => history.push('/')}>
                <FaTwitter />
              </IconButton>
            </div>

            {/* This are the visible links */}
            <MenuLinks />

            {/* UNCOMMENT/COMMENT THIS SECTION FOR A POPOVER MENU */}
            {/* <Popover trigger="click" content={<div className="more-menu-popover"><MoreLinks /></div>}>
          <div className="sidebar-link more-link">
            <span className="sidebar-link-icon">
              {<IoEllipsisHorizontal />}
            </span>
            <span className="sidebar-link-title">
              More
          </span>
          </div>
        </Popover> */}

            {/* POPOVER NORMAL MENU */}
            {/* You can comment this out to use th above menu instead */}
            <div className="sidebar-link more-link" onClick={e => setMoreActive(prev => !prev)}>
              <span className="sidebar-link-icon">
                {<IoEllipsisHorizontalCircleOutline size={22} />}
              </span>
              <span className="sidebar-link-title">
                More
              </span>
            </div>
            <div className={`more-menu ${moreActive ? 'more-active' : ''}`}>
              <IconButton className="menu-closer" onClick={e => setMoreActive(prev => !prev)}>
                <IoIosClose />
              </IconButton>

              <MoreLinks
                closeFunc={e => setMoreActive(prev => !prev)}
                newsFunc={e => setnewsLetterOverlay(prev => !prev)}
                displayFunc={e => setdisplayOverlay(prev => !prev)}
                keyboardFunc={e => setkeyboardOverlay(prev => !prev)}
              />

            </div>
            {/* POPOVER NORMAL MENU */}

            {/* TWEET BUTTON */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Button className="tweet-button" onClick={e => setTweetOverlay(prev => !prev)}>
                Tweet
              </Button>
            </div>

          </div>

          {/* Bottom side of the sidebar */}
          <Popover placement='top' trigger='click' content={<MoreAccountOptions />} className="more-account-optionss" style={{ background: colour.bg, color: colour.global_colour }}>
            <div className="sidebar-bottom">
              <Avatar src="https://pbs.twimg.com/profile_images/1357950864674205696/8bVQrFvB_400x400.jpg" />
              <div className="middle-details">
                <h3>Dalmas Ogembo</h3>
                <p>@dalmasonto</p>
              </div>
              <IconButton className="last-icon">
                <FaEllipsisH />
              </IconButton>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
