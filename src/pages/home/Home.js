import { Avatar, Button, TextareaAutosize } from '@material-ui/core';
import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import { IoStarSharp } from 'react-icons/io5';

import {
  MainLayout,
  MainLayoutLeft,
  MainLayoutHeader,
  MainLayoutRight,
  RightSidebarFooter,
  RightSidebarTwitterTrends,
  RightSidebarTwitterWhoToFollow,
  TweetCard
} from '../../global/components/globals/MainLayoutComponents';
import { tweets } from '../../global/constants/Constants';
import './../../styles/home/Home.css';

function Home() {
  return (
    <MainLayout>

      <MainLayoutLeft>
        <MainLayoutHeader pagetitle="Home" icon={<IoStarSharp />} divider={true} />
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
            </div>
          </div>
        </div>
        <div className="spacer" />
        <div className="home-tweets">
          {/* ALL TWEETS OF THE USERS THAT A USER FOLLOWS*/}
          {
            tweets.map((tweet, index) => {
              return (
                <TweetCard key={index} user={tweet.user} tweetdata={tweet.tweet_data} />
              )
            })
          }
        </div>
      </MainLayoutLeft>

      <MainLayoutRight header={true} divider={true}>
        <RightSidebarTwitterTrends />
        <RightSidebarTwitterWhoToFollow />
        <RightSidebarFooter />
      </MainLayoutRight>

    </MainLayout>
  )
}

export default Home
