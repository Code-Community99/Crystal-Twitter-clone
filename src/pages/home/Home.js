import React from 'react';
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
import WriteTweet from '../../global/components/home/HomeComponents';
import { tweets } from '../../global/constants/Constants';

function Home() {
  return (
    <MainLayout>

      <MainLayoutLeft>
        <MainLayoutHeader pagetitle="Home" icon={<IoStarSharp />} divider={true} />
        <WriteTweet />
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
