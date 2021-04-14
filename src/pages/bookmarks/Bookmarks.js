import React from 'react';
import { IoEllipsisHorizontal } from 'react-icons/io5';

import { AddHappenings, NewsPop, Search, Trend } from '../../global/components/explore/ExploreComponents';

import {
  MainLayout,
  MainLayoutLeft,
  MainLayoutHeader,
  MainLayoutRight,
  RightSidebarFooter,
  RightSidebarTwitterTrends,
  RightSidebarTwitterWhoToFollow,
  MainLayoutCustomHeader
} from '../../global/components/globals/MainLayoutComponents';
import './../../styles/explore/Explore.css';

function Bookmarks() {
  return (
    <MainLayout>

      <MainLayoutLeft>

        <MainLayoutHeader pagetitle="Bookmarks" tagline="@dalmasonto" divider={true} icon={<IoEllipsisHorizontal />} />


      </MainLayoutLeft>

      <MainLayoutRight header={false} divider={true}>
        <RightSidebarTwitterTrends />
        <RightSidebarTwitterWhoToFollow />
        <RightSidebarFooter />
      </MainLayoutRight>

    </MainLayout>
  )
}

export default Bookmarks
