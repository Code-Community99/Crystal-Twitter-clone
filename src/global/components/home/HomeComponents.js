import React from 'react'
import { Avatar, Button, IconButton, TextareaAutosize } from '@material-ui/core';
import { FaCalendarCheck, FaGlobe, FaSmile } from 'react-icons/fa';
import { IoIosImage, IoIosStats } from 'react-icons/io';
import { IoGift } from 'react-icons/io5';

const WriteTweet = () => {
  return (
    <div className="home-write-tweet">
      <div className="home-write-tweet-left">
        <Avatar />
      </div>
      <div className="home-write-tweet-right">
        <div className="home-write-tweet-right-top">
          <TextareaAutosize placeholder="What's happening?" />
          <div className="home-write-tweet-right-top-who-to-reply">
            <FaGlobe className="home-write-tweet-right-top-who-to-reply-icon" />
            <p>Everyone</p>
          </div>
        </div>
        <div className="home-write-tweet-right-bottom">
          <div className="divider" />

          <div className="home-write-tweet-right-bottom-bar">

            <div className="home-write-tweet-right-bottom-bar-icons">
              <ActionButton disabled={true} icon={<IoIosImage size={20} />} />
              <ActionButton disabled={true} icon={<IoGift size={20} />} />
              <ActionButton disabled={true} icon={<IoIosStats size={20} />} />
              <ActionButton disabled={true} icon={<FaSmile size={20} />} />
              <ActionButton disabled={true} icon={<FaCalendarCheck size={20} />} />
            </div>
            <div className="home-write-tweet-right-bottom-bar-button">
              <Button className="home-write-tweet-right-bottom-bar-button-b" disabled={true}>
                Tweet
                  </Button>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
const ActionButton = ({ icon, disabled }) => {

  return (
    <div className="action-button">
      <IconButton className="action-button-btn" disabled={disabled}>
        {icon}
      </IconButton>
    </div>
  )
}

export default WriteTweet