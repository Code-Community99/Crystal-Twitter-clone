import React from 'react'
import './../../styles/home/Home.css'
import TwitterRightSidebarCommon from "../notifications/Notifications.js"
import {MainLayout,MainLayoutLeft,MainLayoutRight,MainLayoutHeader,RRightSidebarFooter,RightSidebarTwitterWhoToFollow,RightSidebarTwitterTrends,RightSidebarFooter,TweetCard,ReTweetCard,ProfilePreview} from "../../global/components/globals/MainLayoutComponents.js"
function triggerHover(e){
    return
}
function Home() {
  return (
    <MainLayout>

      <MainLayoutLeft>
        <MainLayoutHeader pagetitle="Messages" />
        <TweetCard>
            <ProfilePreview/>
        </TweetCard>
        <TweetCard>
            <ProfilePreview/>
        </TweetCard>
        <TweetCard>
            <ProfilePreview/>
        </TweetCard>
        <ReTweetCard>
            <ProfilePreview/>
        </ReTweetCard>
      </MainLayoutLeft>

      <MainLayoutRight header={true}>
        <RightSidebarTwitterTrends />
        <RightSidebarTwitterWhoToFollow />
        <RightSidebarFooter />
      </MainLayoutRight>

    </MainLayout>
  )
}

export default Home
