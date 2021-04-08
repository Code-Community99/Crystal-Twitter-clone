import React from 'react'
import { Avatar } from '@material-ui/core';
import { Tabs } from 'uiw';
import { } from 'react-icons/io';
import {
  MainLayout,
  MainLayoutLeft,
  MainLayoutRight,
  RightSidebarFooter,
  RightSidebarTwitterTrends,
  RightSidebarTwitterWhoToFollow,
  MainLayoutCustomHeader,
  TweetCard,
  ReTweetCard
} from '../../global/components/globals/MainLayoutComponents';

import './../../styles/profile/Profile.css';
import { Button, IconButton } from '@material-ui/core';
import { IoArrowBack, IoCalendar, IoLink, IoLocate, IoLocation, IoLocationOutline } from 'react-icons/io5';
import { } from 'react-icons/io5';
import { FaBirthdayCake, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <MainLayout>

      <MainLayoutLeft>

        <MainLayoutCustomHeader newclass="my-custom-header">
          <div className="my-custom-header-inner">
            <IconButton className="back-btn">
              <IoArrowBack />
            </IconButton>
            <div className="my-custom-header-details">
              <h3>Dalmas Ogembo</h3>
              <p>20 Tweets</p>
            </div>
          </div>
          <div className="divider" />
        </MainLayoutCustomHeader>


        <div className="profile-data">
          <div className="profile-data-top">
            <div className="profile-data-top-cover">

            </div>
            <div className="profile-data-top-row">
              <div className="profile-data-top-row-left">
                <Avatar className="profile-data-top-row-left-avatar" />
              </div>
              <div className="profile-data-top-row-right">
                <Button className="edit-profile-btn">
                  Edit profile
                </Button>
              </div>
            </div>
          </div>
          <div className="profile-data-lower">
            <div className="profile-data-lower-name-handle">
              <h3>Dalmas Ogembo</h3>
              <p>@dalmasonto</p>
            </div>
            <div className="profile-data-lower-bio">
              <p> My good bio here </p>
            </div>
            <div className="profile-data-lower-more">
              <div className="profile-data-lower-more-item">
                <IoLocationOutline className="profile-data-lower-more-item-icon" />
                <p> Rongai </p>
              </div>
              <div className="profile-data-lower-more-item">
                <IoLink className="profile-data-lower-more-item-icon" />
                <a className="link" href="http://discuzz.herokuapp.com"> discuzz.herokuapp.com </a>
              </div>
              <div className="profile-data-lower-more-item">
                <FaBirthdayCake className="profile-data-lower-more-item-icon" />
                <p> Born August 29, 1998 </p>
              </div>
              <div className="profile-data-lower-more-item">
                <IoCalendar className="profile-data-lower-more-item-icon" />
                <p> Joined August 2015 </p>
              </div>
            </div>
            <div className="profile-data-lower-followers-following">
              <Link to="/" className="f-link">
                <span className="f-link-count">
                  31
                </span>
                <span className="f-link-text">
                  Following
                </span>
              </Link>
              <Link to="/" className="f-link">
                <span className="f-link-count">
                  26
                </span>
                <span className="f-link-text">
                  Followers
                </span>
              </Link>
            </div>

          </div>
        </div>

        <div className="main-layout-header-tabs static-tabs">
          <Tabs type="line" activeKey="1" onChange={e => console.log(e)}>

            <Tabs.Pane label="Tweets" key="1">
              <div className="tweets-tab">
                <TweetCard />
                <ReTweetCard />
                <TweetCard />
                {/* <ReTweetCard />
                <TweetCard />
                <ReTweetCard />
                <ReTweetCard />
                <ReTweetCard />
                <ReTweetCard /> */}
              </div>
            </Tabs.Pane>
            <Tabs.Pane label="Tweets & replies" key="2">
              Tweets & replies
            </Tabs.Pane>
            <Tabs.Pane label="Media" key="3">
              Media
            </Tabs.Pane>
            <Tabs.Pane label="Likes" key="4">
              Likes
            </Tabs.Pane>

          </Tabs>
        </div>

      </MainLayoutLeft>

      <MainLayoutRight header={true}>
        <RightSidebarTwitterTrends />
        <RightSidebarTwitterWhoToFollow />
        <RightSidebarFooter />
      </MainLayoutRight>

    </MainLayout >
  )
}
export default Profile
