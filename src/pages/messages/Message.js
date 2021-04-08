import React from 'react'
import { Tabs } from 'uiw';
import { IoIosCog } from 'react-icons/io';
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
import {
  TwitterNotification,
  FollowNotification,
  LikeNotification,
  RecommendedForYouNotification,
  TweetNotification,
  RetweetNotification,
  NoMentionsComponent
} from '../../global/components/notifications/NotificationComponents';

function Messages() {
  return (
    <MainLayout>

      <MainLayoutLeft>
        <MainLayoutHeader pagetitle="Messages" />
        <div>

        </div>
      </MainLayoutLeft>

      <MainLayoutRight header={true}>
        <RightSidebarTwitterTrends />
        <RightSidebarTwitterWhoToFollow />
        <RightSidebarFooter />
      </MainLayoutRight>

    </MainLayout>
  )
}
export default Messages
