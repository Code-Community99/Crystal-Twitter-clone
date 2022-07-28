import React, { useEffect, useState } from 'react';
import { IoIosSearch, IoIosCloseCircle } from 'react-icons/io';
import { UserToMessageLink } from '../../global/components/globals/FixedMessagingComponents';
import './../../styles/messages/Messages.css';
import { usersToMessage } from './../../global/components/globals/FixedMessaging';
import { Avatar, Button, IconButton, TextareaAutosize } from '@material-ui/core';
import { FaCalendarDay, FaCog, FaFacebookMessenger, FaRegCopy, FaRegPaperPlane, FaSmileWink, FaTrashAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectColour } from './../../features/display/DisplaySlice';
import { IoCopyOutline, IoEllipsisHorizontal, IoGiftOutline, IoHeartOutline, IoImageOutline, IoInformationCircleOutline, IoTrash, IoTrashBinOutline, } from 'react-icons/io5';
import { Link, useParams } from 'react-router-dom';
import { Popover } from 'uiw';

function Messages() {
  const [selectedMessage, setSelectedMessage] = useState(null);

  // const history = useHistory()
  const params = useParams()

  const color = useSelector(selectColour);

  // const selectMessage = (message) => {
  //   setSelectedMessage(message)
  //   // history.push('messages/' + message.hashtag)
  // }

  useEffect(() => {
    // if (selectedMessage) {
    //   console.log('SELECTED MESSAGE ', selectedMessage)
    // }
    if (params.chat_room) {
      const user = usersToMessage.find(user => user.hashtag === params.chat_room)
      setSelectedMessage(user)
    }
  }, [params])
  return (
    <div className="messages" style={{ color: color.global_colour }}>

      <div className="messages-left">
        <div className="messages-left-header">
          <div>
            <h2>Messages</h2>
          </div>
          <div>
            <IconButton className="messages-left-header-icon">
              <FaCog />
            </IconButton>
            <IconButton className="messages-left-header-icon">
              <FaFacebookMessenger />
            </IconButton>
          </div>
        </div>
        <div className="messages-left-body">

          <div className="messages-left-body-search">
            <div className="twitter-search-component">
              <div className="twitter-search-component-wrapper">
                <IoIosSearch size={26} className="twitter-search-component-search-icon" />
                {/* <Popover trigger="focus" placement="bottom" content={<TwitterSearchContent />} className="search-results-popover" style={{ background: colour.bg, color: colour.global_colour }}> */}
                <input className="twitter-search-component-input" placeholder="Search for people and groups" />
                {/* </Popover> */}
                <IoIosCloseCircle size={26} className="twitter-search-component-cancel-icon" />
              </div>
            </div>

          </div>

          {
            usersToMessage.map((userMessage, index) => {
              return (
                <div className={`messages-left-body-common-div ${selectedMessage && selectedMessage.hashtag === userMessage.hashtag ? 'selected' : ''}`}>
                  <UserToMessageLink to={`/messages/${userMessage.hashtag}`} key={index} name={userMessage.name} hashtag={userMessage.hashtag} text={userMessage.text} click={e => console.log('__')} />
                  {/* <div className="divider" /> */}
                </div>
              )
            })
          }

        </div>

      </div>

      {
        !selectedMessage &&
        <div className="messages-right">
          <div className="messages-right-body-full">
            <h2>You don’t have a message selected</h2>
            <p>Choose one from your existing messages, or start a new one.</p>
            <Button className="messages-right-body-full-btn">
              New message
            </Button>
          </div>
        </div>
      }
      {
        selectedMessage &&
        <div className="messages-right">
          <div className="messages-right-header">
            <div className="messages-right-header-left">
              <Avatar className="messages-right-header-left-avatar">{selectedMessage?.name[0]}</Avatar>
              <div className="messages-right-header-left-user">
                <h3>{selectedMessage?.name}</h3>
                <p>{selectedMessage?.hashtag}</p>
              </div>
            </div>
            <div className="messages-right-header-right">
              <IconButton className="messages-right-header-right-icon">
                <IoInformationCircleOutline />
              </IconButton>
            </div>
          </div>
          <div className="messages-right-body">


            <div className="messages-right-body-user-details">
              <Link to={`/profile/${selectedMessage?.hashtag}`} className="messages-right-body-user-details-top-link">
                <div className="messages-right-body-user-details-top-link-header">
                  <h4> {selectedMessage?.name} </h4>
                  <p> {selectedMessage?.hashtag} </p>
                </div>
                <div className="messages-right-body-user-details-top-link-header-text">
                  <p>
                    We at Mango are among the leading web hosting companies in Kenya with a wide client base ranging from companies, industries and small and large businesses.
                  </p>
                </div>
                <div className="messages-right-body-user-details-top-link-header-fol">
                  <p> 122 <span>Following</span> </p>
                  <p> 93 <span>Followers</span> </p>
                </div>
                <div className="messages-right-body-user-details-top-link-header-date">
                  <FaCalendarDay className="messages-right-body-user-details-top-link-header-date-icon" />
                  <p className="messages-right-body-user-details-top-link-header-date-text">Joined December 2019 </p>
                </div>
              </Link>
            </div>

            <div className="messages-right-body-text-messages">

              <RightMessage />
              <RightMessageWithLink />
              <RightMessage />
              <LeftMessage />
              <LeftMessage />
              <LeftMessageWithLink />
              <RightMessage />
              <LeftMessage />
              <RightMessageWithLink />
              <RightMessage />
              <RightMessage />
              <RightMessageWithLink />
              <RightMessage />
              <LeftMessage />
              <LeftMessage />
              <LeftMessageWithLink />
              <RightMessage />
              <LeftMessage />
              <RightMessageWithLink />
              <RightMessage />


              <div className="messages-right-body-text-message-other"></div>

            </div>

          </div>

          <div>
            <div className="messages-right-footer">
              <div className="messages-right-footer-els">
                <IconButton className="messages-right-footer-els-icon"> <IoImageOutline /> </IconButton>
                <IconButton className="messages-right-footer-els-icon"> <IoGiftOutline /> </IconButton>
                <div className="messages-right-footer-els-input">
                  <TextareaAutosize className="messages-right-footer-els-input-text" rowsMax="10" placeholder="Start a new message" />
                  <IconButton className="messages-right-footer-els-icon"> <FaSmileWink /> </IconButton>
                </div>
                <IconButton className="messages-right-footer-els-icon"> <FaRegPaperPlane /> </IconButton>
              </div>
            </div>
          </div>

        </div>
      }

    </div>
  )
}


const RightMessage = () => {

  return (
    <div className="message">
      <div className="message-holder">
        <MessageActions />
        <div className="message-details">
          {/* <div className="message-details-link"></div> */}
          <div className="message-details-text">
            <p className="message-radius-left-top message-radius-right-top message-radius-left-bottom">
              Lorem ipsum do
            </p>
          </div>
        </div>
      </div>
      <div className="message-time">
        Thu 6:47 PM
      </div>
    </div>
  )
}

const RightMessageWithLink = () => {

  return (
    <div className="message">
      <div className="message-holder">
        <MessageActions />
        <div className="message-details message-100">
          <div className="message-details-link message-radius-left-bottom message-radius-right-top message-radius-left-top"></div>
          <div className="message-details-text text-auto-width">
            <p className="message-radius-left-bottom">
              Lorem ipsum do
            </p>
          </div>
        </div>
      </div>
      <div className="message-time">
        Thu 6:47 PM
      </div>
    </div>
  )
}


const LeftMessage = () => {

  return (
    <div className="message-align-left">
      <div className="message-left-holder">

        <div className="message-details">
          <div className="message-details-text">
            <p className="left-message message-radius-left-top message-radius-right-top message-radius-right-bottom">
              <span>Lorem ipsum do Lorem ipsumipsum do</span>
            </p>
          </div>
        </div>
        <MessageActions />
      </div>
      <div className="message-time">
        Thu 6:47 PM
      </div>
    </div>
  )
}

const LeftMessageWithLink = () => {

  return (
    <div className="message-align-left">
      <div className="message-left-holder">

        <div className="message-details message-100">
          <div className="message-details-link message-radius-right-bottom message-radius-right-top"></div>
          <div className="message-details-text text-left-auto-width">
            <p className="left-message message-radius-right-bottom">
              Lorem ipsum do
            </p>
          </div>
        </div>
        <MessageActions />
      </div>
      <div className="message-time">
        Thu 6:47 PM
      </div>
    </div>
  )
}

const MessageActions = () => {
  return (
    <div className="message-action-icons">
      <Popover trigger="click" content={<ReactActions />} visibleArrow={false} className="delete-message-popover">
        <IconButton className="message-action-icons-icon">
          <IoHeartOutline />
        </IconButton>
      </Popover>
      <Popover trigger="click" content={<EllipsisActions />} visibleArrow={false} className="delete-message-popover">
        <IconButton className="message-action-icons-icon">
          <IoEllipsisHorizontal />
        </IconButton>
      </Popover>
    </div>
  )
}

const EllipsisActions = () => {
  const colors = useSelector(selectColour)
  return (
    <div className="ellipsis-actions" style={{ background: colors.bg, color: colors.global_colour }}>
      <div className="ellipsis-action delete-action">
        <IconButton className="ellipsis-action-icon">
          <IoTrash />
        </IconButton>
        <div className="ellipsis-action-text">Delete for me</div>
      </div>
      <div className="ellipsis-action copy-action">
        <IconButton className="ellipsis-action-icon">
          <FaRegCopy />
        </IconButton>
        <div className="ellipsis-action-text">Copy message</div>
      </div>
    </div>
  )
}

const ReactActions = () => {
  const colors = useSelector(selectColour)
  return (
    <div className="react-actions" style={{ background: colors.bg, color: colors.global_colour }}>
      <div className="react-action">😂</div>
      <div className="react-action">😲</div>
      <div className="react-action">😢</div>
      <div className="react-action">❤️</div>
      <div className="react-action">👎</div>
      <div className="react-action">👍</div>
    </div>
  )
}
export default Messages
