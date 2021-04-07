import React from 'react'
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

function Lists() {
  return (
    <MainLayout>

      <MainLayoutLeft>
        {/* 
        
          The MainLayoutHeader is the mostly used header, but incase the header is different just make a custom header using 
          <MainLayoutCustomHeader newclass='someclass'>
            ... normal html code
          </MainLayoutCustomHeader>
        
        */}
        <MainLayoutHeader pagetitle="Lists" icon={<IoNewspaper size={26} />} />

        {/* ADD ALL THE CODE YOU NEED TO DO FOR A SPECIFIC PAGE HERE, EDITING THE WIDTH OR ANY OTHER PROPERTIES OF THE LEFT AND RIGHT SIDEBAR HERE PASS IN AN ATTRIBUTE OF 'newclass=`someclass` ' TO MAINLAYOUTLEFT AND MAINLAYOUTRIGHT */}


      </MainLayoutLeft>

      <MainLayoutRight header={true}>
        {/* <RightSidebarTwitterTrends /> */}
        {/* <RightSidebarTwitterWhoToFollow /> */}
        <RightSidebarFooter />
      </MainLayoutRight>

    </MainLayout>
  )
}
export default Lists
