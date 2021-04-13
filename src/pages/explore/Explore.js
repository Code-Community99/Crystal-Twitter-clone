import React from 'react';

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

function Explore() {
  return (
    <MainLayout>

      <MainLayoutLeft>

        <MainLayoutCustomHeader divider >
          <Search />
        </MainLayoutCustomHeader>

        <NewsPop />

        <div className="trendHeader">
          <h2>Country Trends</h2>
        </div>
        <Trend title="#ENDIMFLOAN"
          subtitle="Trending ." tweets="89488" />
        <Trend title="#MasculinitySartuday"
          subtitle="Trending ." tweets="98498" />
        <Trend title="#Thieves "
          subtitle="Trending ." tweets="463618" />
        <Trend title="#EndUHuruLoans"
          subtitle="Trending ." tweets="23456" />
        <Trend title="#BBI"
          subtitle="Trending ." tweets="3896849" />
        <Trend title="#Wanugu"
          subtitle="Trending ." tweets="7004" />

        <div className="right-sidebar-component-body-common-footer">
          <p>Show more</p>
        </div>

        {/* add happenings */}
        <div className="HappeningsTag">
          <h3>Whats Happenings...</h3>
        </div>
        <AddHappenings />


        <div className="right-sidebar-component-body-common-footer">
          <p>Show more</p>
        </div>


      </MainLayoutLeft>

      <MainLayoutRight header={false} divider={true}>
        <RightSidebarTwitterTrends />
        <RightSidebarTwitterWhoToFollow />
        <RightSidebarFooter />
      </MainLayoutRight>

    </MainLayout>
  )
}

export default Explore
