import React from 'react'
import { IoEllipsisHorizontal, IoSearch } from 'react-icons/io5';
import { IconButton } from '@material-ui/core'
import './../../../styles/explore/Explore.css';
import { FaCog, FaSearch } from 'react-icons/fa';
import { IoIosSearch, IoIosSettings } from 'react-icons/io';


// declare an image Url
let ImageUrl = "https://picsum.photos/seed/picsum/536/354";

export function Search() {
  return (
    <div className="top-navbar-left-l-search">
      <div className="twitter-search">
        <IoIosSearch size={26} className="twitter-search-icon" />
        <input className="twitter-search-component-input"
          placeholder="Search Item Here.. " />
      </div>
      <IconButton className="setting_Icon">
        <FaCog className="setting_Icon_svg" />
      </IconButton>
    </div>

  )
}


export const Trend = ({ subtitle, title, tweets }) => {
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




export const Happennings = ({ title, time, desc, image }) => {
  return (
    <div>
      <div className="happening-trend">
        <div className="happening-data">
          <p> {title}   .  {time} </p>
          <h3> {desc} </h3>
        </div>
        <IconButton className="happening-elipsis">
          <img src="https://picsum.photos/seed/picsum/536/354" alt='' ></img>
        </IconButton>
      </div>
      <div className="divider" />
    </div>
  )
}

export const AddHappenings = function () {
  return (
    <div>
      <Happennings title="News" time='today'
        desc="Travel bubble between Australia and New Zealand set to begin on April 19"
        image={{ ImageUrl }}
      />

      <Happennings title="News" time='today'
        desc="Travel bubble between Australia and New Zealand set to begin on April 19"
        image={{ ImageUrl }}
      />

      <Happennings title="News" time='today'
        desc="Travel bubble between Australia and New Zealand set to begin on April 19"
        image={{ ImageUrl }}
      />

      <Happennings title="News" time='today'
        desc="Travel bubble between Australia and New Zealand set to begin on April 19"
        image={{ ImageUrl }}
      />

      <Happennings title="News" time='today'
        desc="Travel bubble between Australia and New Zealand set to begin on April 19"
        image={{ ImageUrl }}
      />

    </div>
  )
}


export function NewsPop() {
  return (
    <div className="topNews">
      <img src="https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dXJsfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60" alt=''></img>
      <div className="topNewsHeadline">
        <h3>News.</h3>
        <p>
          The top German Police has been Arrested jana
        </p>
      </div>
    </div>
  )
}

export function Setting() {
  return (
    <div className="icon4setting">
      <FaCog />
    </div>
  )
}