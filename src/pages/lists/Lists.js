import React, { useEffect, useState } from 'react'
import { Tabs } from 'uiw';
import { IoIosCog } from 'react-icons/io';
import { IoNewspaper } from 'react-icons/io5';
import {
  MainLayout,
  MainLayoutLeft,
  MainLayoutHeader,
  MainLayoutRight,
  RightSidebarFooter,
  RightSidebarTwitterTrends,
  RightSidebarTwitterWhoToFollow
} from '../../global/components/globals/MainLayoutComponents';
import { Avatar, Button } from '@material-ui/core';

function Lists() {


  return (
    <MainLayout>

      <MainLayoutLeft>

        <MainLayoutHeader pagetitle="Lists" divider={true} icon={<IoNewspaper size={26} />} />


      </MainLayoutLeft>

      <MainLayoutRight header={true}>
        <RightSidebarTwitterTrends />
        <RightSidebarTwitterWhoToFollow />
        <RightSidebarFooter />
      </MainLayoutRight>

    </MainLayout>
  )
}

export default Lists
