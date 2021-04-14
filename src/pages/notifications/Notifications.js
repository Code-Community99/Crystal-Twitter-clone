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

function Notifications() {
  return (
    <MainLayout>

      <MainLayoutLeft>

        <MainLayoutHeader pagetitle="Notifications" icon={<IoIosCog size={26} />} />

        <div className="main-layout-header-tabs">
          <Tabs type="line" activeKey="1" onChange={e => console.log(e)}>

            <Tabs.Pane label="All" key="1">
              <div className="all-notifications">
                <FollowNotification />
                <LikeNotification />
                <RecommendedForYouNotification />
                <TweetNotification />
                <RetweetNotification />
                <TwitterNotification />
              </div>
            </Tabs.Pane>
            <Tabs.Pane label="Mentions" key="2">
              <NoMentionsComponent />
            </Tabs.Pane>

          </Tabs>
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
export default Notifications
