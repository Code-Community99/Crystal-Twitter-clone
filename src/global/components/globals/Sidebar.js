import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { moreLinks, routes } from '../../constants/Constants';
import './../../styles/Sidebar.css';
import { FaCheck, FaDotCircle, FaEllipsisH, FaTwitter } from 'react-icons/fa';
import { IoEllipsisHorizontal, IoEllipsisHorizontalCircleOutline } from 'react-icons/io5';

import { Avatar, Button, IconButton } from '@material-ui/core'
import { Popover } from 'uiw'
import { IoIosClose } from 'react-icons/io';
import { MenuLinks, MoreAccountOptions, MoreLinks } from './SidebarComponents';


function Sidebar() {

  const [moreActive, setMoreActive] = useState(false);
  const history = useHistory();

  return (
    <div className="sidebar">

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
              <MoreLinks closeFunc={e => setMoreActive(prev => !prev)} />
            </div>
            {/* POPOVER NORMAL MENU */}

            {/* TWEET BUTTON */}
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <Button className="tweet-button">
                Tweet
          </Button>
            </div>

          </div>

          {/* Bottom side of the sidebar */}
          <Popover placement='top' trigger='click' content={<MoreAccountOptions />} className="more-account-optionss">
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
