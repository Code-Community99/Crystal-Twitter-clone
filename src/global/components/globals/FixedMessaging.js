import React, { useState } from 'react';
import { Button, IconButton } from '@material-ui/core';
import { } from 'react-icons/fa';
import { IoChatbox, IoChevronBack, IoChevronDown, IoChevronUp } from 'react-icons/io5';
import './../../styles/FixedMessaging.css';
import { UserToMessage } from './FixedMessagingComponents';

const usersToMessage = [
  {
    name: 'Dalmas Ogembo',
    hashtag: '@alpha',
    text: 'Hello world!'
  },
  {
    name: 'Paulster',
    hashtag: '@paulster',
    text: 'Hi, check your frontend interface!'
  },
  {
    name: 'Duncan Santiago',
    hashtag: '@paymasterMax',
    text: 'I will do data analysis and make visual presentations over the same'
  }
]

function FixedMessaging() {

  const [messagesBodyActive, setMessagesBodyActive] = useState(false);
  const [messageToRead, setMessageToRead] = useState(null);

  const activateMessagesBody = () => {
    setMessagesBodyActive(prev => !prev)
  }

  const [messageReading, setMessageReading] = useState(false);

  const readMessage = (e) => {
    setMessageReading(prev => !prev);
    setMessageToRead(e)
  }
  return (
    <div className="fixed-messaging-component">
      <div className="fixed-messaging-component-header">

        {
          messageReading && messageToRead !== null ?
            <div className="display-flex">
              <IconButton onClick={e => readMessage()}>
                <IoChevronBack className="fixed-messaging-component-icon-button" />
              </IconButton>
              <div className="reading-message-header">
                <h3>{messageToRead.name}</h3>
                <p>{messageToRead.hashtag}</p>
              </div>
            </div>
            :
            ""
        }

        {
          !messageReading &&
          <h2> Messages </h2>
        }

        <div className="fixed-messaging-component-right-icons">
          {!messageReading &&
            <IconButton >
              <IoChatbox className="fixed-messaging-component-icon-button" />
            </IconButton>
          }
          <IconButton>
            {
              messagesBodyActive ? <IoChevronDown className="fixed-messaging-component-icon-button" onClick={e => activateMessagesBody()} /> : <IoChevronUp className="fixed-messaging-component-icon-button" onClick={e => activateMessagesBody()} />
            }

          </IconButton>
        </div>
      </div>
      <div className="divider"></div>

      {/* {
        !messageReading ? <MessagesViewingComponent active={messagesBodyActive} activateMessagesBody={activateMessagesBody} readMessage={readMessage} /> : <MessageReadingComponent active={messagesBodyActive} activateMessagesBody={activateMessagesBody} readMessage={readMessage} />

      } */}
      <div className={`fixed-messaging-component-body ${messagesBodyActive ? 'fixed-messaging-component-body-active' : ''}`}>

        {/* The message body stuff */}
        {
          !messageReading &&
          <div>

            {
              usersToMessage.map((userMessage, index) => {
                return (
                  <div>
                    <UserToMessage key={index} name={userMessage.name} hashtag={userMessage.hashtag} text={userMessage.text} click={() => readMessage(userMessage)} />
                    <div className="divider" />
                  </div>
                )
              })
            }

          </div>
        }
        {
          messageReading && messageToRead !== null ?
            <p> {messageToRead.text} </p>
            :
            ""
        }
      </div>

    </div>
  )
}


const MessagesViewingComponent = (props) => {

  return (
    <div className="fixed-messaging-component-main">
      <div className="fixed-messaging-component-header">
        <h2>Messages</h2>
        <div className="fixed-messaging-component-right-icons">
          <IconButton >
            <IoChatbox className="fixed-messaging-component-icon-button" />
          </IconButton>
          <IconButton>
            {
              props.active ? <IoChevronDown className="fixed-messaging-component-icon-button" onClick={e => props.activateMessagesBody()} /> : <IoChevronUp className="fixed-messaging-component-icon-button" onClick={e => props.activateMessagesBody()} />
            }

          </IconButton>
        </div>
      </div>
      <div className="divider"></div>
      <div className={`fixed-messaging-component-body ${props.active ? 'fixed-messaging-component-body-active' : ''}`}>
        <Button onClick={e => props.readMessage()}>
          Click to read message
            </Button>
      </div>
    </div>
  )
}


const MessageReadingComponent = (props) => {

  return (
    <div className="fixed-messaging-component-main">
      <div className="fixed-messaging-component-header">
        <IconButton onClick={e => props.readMessage()}>
          <IoChevronBack className="fixed-messaging-component-icon-button" />
        </IconButton>
        <div className="reading-message-header">
          <h2>Duncan Santiago</h2>
          <p>@paymastermax</p>
        </div>
        <div className="fixed-messaging-component-right-icons">
          <IconButton>
            <IoChatbox className="fixed-messaging-component-icon-button" />
          </IconButton>
          <IconButton>
            {
              props.active ? <IoChevronDown className="fixed-messaging-component-icon-button" onClick={e => props.activateMessagesBody()} /> : <IoChevronUp className="fixed-messaging-component-icon-button" onClick={e => props.activateMessagesBody()} />
            }

          </IconButton>
        </div>
      </div>
      <div className="divider"></div>
      <div className={`fixed-messaging-component-body ${props.active ? 'fixed-messaging-component-body-active' : ''}`}>

      </div>
    </div>
  )
}

export default FixedMessaging
