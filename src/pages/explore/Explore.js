import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { FaCheck, FaDotCircle, FaEllipsisH, FaTwitter } from 'react-icons/fa';
import { IoEllipsisHorizontal } from 'react-icons/io5';
import { Avatar, Button, IconButton } from '@material-ui/core'
import { Popover } from 'uiw'
import { IoIosClose } from 'react-icons/io';
import './../../styles/explore/Explore.css';
import { IoIosCloseCircle, IoIosCog, IoIosSearch } from 'react-icons/io';
import { FaBars, FaBell, FaSearch , FaCog } from 'react-icons/fa';

import {
  MainLayout,
  MainLayoutLeft,
  MainLayoutHeader,
  MainLayoutRight,
  RightSidebarFooter,
  RightSidebarTwitterTrends,
  RightSidebarTwitterWhoToFollow
} from '../../global/components/globals/MainLayoutComponents';
import './../../styles/notifications/Notifications.css';

// declare an image Url
let ImageUrl = "https://picsum.photos/seed/picsum/536/354";

function Search(){
  return (
    <div className="top-navbar-left-l-search">
          <div className="twitter-search">
              <input className="twitter-search-component-input" 
              placeholder="Search Item Here.. " />
          </div>
          <div className="setting_Icon">
            <Setting />
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
          <p> {tweets} tweets</p>
        </div>
        <IconButton className="trend-elipsis">
          <IoEllipsisHorizontal />
        </IconButton>
      </div>
      <div className="divider" />
    </div>
  )
}




const Happennings = ({ title, time , desc , image }) => {
  return (
    <div>
      <div className="happening-trend">
        <div className="happening-data">
          <p> {title}   .  {time} </p>
          <h3> {desc} </h3>
        </div>
        <IconButton className="happening-elipsis">
        <img src = "https://picsum.photos/seed/picsum/536/354" ></img>
        </IconButton>
      </div>
      <div className="divider" />
    </div>
  )
}

const AddHappenings= function(){
  return (
    <div>
    <Happennings title = "News" time ='today'
    desc ="Travel bubble between Australia and New Zealand set to begin on April 19"
    image = {{ImageUrl}}
    />

    <Happennings title = "News" time ='today'
    desc ="Travel bubble between Australia and New Zealand set to begin on April 19"
    image = {{ImageUrl}}
    />

    <Happennings title = "News" time ='today'
    desc ="Travel bubble between Australia and New Zealand set to begin on April 19"
    image = {{ImageUrl}}
    />

    <Happennings title = "News" time ='today'
    desc ="Travel bubble between Australia and New Zealand set to begin on April 19"
    image = {{ImageUrl}}
    />

    <Happennings title = "News" time ='today'
    desc ="Travel bubble between Australia and New Zealand set to begin on April 19"
    image = {{ImageUrl}}
    />

    </div>
  )
}


function NewsPop(){
  return(
    <div className="topNews">
      <img src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"></img>
      <h3>News.</h3>
      <p>
      The top German Police has been Arrested jana
      </p>
    </div>
  )
}

function Setting(){
  return(
    <div className="icon4setting">
      <FaCog />
    </div>
  )
}
function Explore() {  
    return (
      <div className="explore">
        <div className="exploreContent">
          <Search />
          <NewsPop />

          {/* add trends */}
          <div className="trendHeader">
          <h2>Country Trends</h2>
          </div>
          <Trend title="#ENDIMFLOAN" 
          subtitle="Trending ." tweets="89488" />
          <Trend title="#MasculinitySartuday" 
          subtitle="Trending ." tweets="98498" />
          <Trend title="#Thieves " 
          subtitle="Trending ." tweets="463618" />
          <Trend title="#EndUHuruLoans" 
          subtitle="Trending ." tweets="23456" />
          <Trend title="#BBI" 
          subtitle="Trending ." tweets="3896849" />
          <Trend title="#Wanugu" 
          subtitle="Trending ." tweets="7004" />

          <div className="right-sidebar-component-body-common-footer">
            <p>Show more</p>
          </div>

          {/* add happenings */}
          <div className="HappeningsTag">
          <h3>Whats Happenings...</h3>
          </div>
          <AddHappenings />


          <div className="right-sidebar-component-body-common-footer">
            <p>Show more</p>
          </div>
          
        </div>
        <div className="NotificationRight">
        <RightSidebarTwitterTrends />
        <RightSidebarTwitterWhoToFollow />
        <RightSidebarFooter />
        </div>
      </div>
    )
  }
  
  export default Explore;
  