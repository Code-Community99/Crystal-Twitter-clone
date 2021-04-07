import { Avatar, IconButton } from "@material-ui/core"
import { FaHeart, FaStar, FaTwitter, FaUser } from "react-icons/fa"
import { } from "react-icons/io"
import { IoChatbox, IoEllipsisHorizontal, IoEllipsisHorizontalCircle, IoStar, IoText } from "react-icons/io5"


const TwitterNotification = () => {
  return (
    <div className="notification">
      <div className="notification-left">
        <FaTwitter className="twitter-notification" />
      </div>
      <div className="notification-right">
        <div className="notification-right-wrapper">
          <p>
            There was a recent login into your account @dalmasonto from a new device on March 31, 2021. Review it now.
          </p>
        </div>
      </div>
    </div>
  )
}

const FollowNotification = () => {
  return (
    <div className="notification">
      <div className="notification-left">
        <FaUser className="follow-notofication" />
      </div>
      <div className="notification-right">
        <div className="notification-right-wrapper">
          <Avatar />
          <div className="notification-details">
            <div className="notification-details-header-text">
              <h3>Dr Nyamai</h3>
              <span>Followed you</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LikeNotification = () => {
  return (
    <div className="notification">
      <div className="notification-left">
        <FaHeart className="like-notification" />
      </div>
      <div className="notification-right">
        <div className="notification-right-wrapper">
          <div className="notification-like-avatars">
            <Avatar className="notification-like-avatar" />
            <Avatar className="notification-like-avatar" />
            <Avatar className="notification-like-avatar" />
          </div>
          <div className="notification-details">
            <div className="notification-details-header-text">
              <h3> Dann </h3>
              <span>and two others liked your reply</span>
            </div>
            <div className="text">
              Some of your reply
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const RecommendedForYouNotification = () => {
  return (
    <div className="notification">
      <div className="notification-left">
        <FaStar className="recommended-for-you-notification" />
      </div>
      <div className="notification-right">
        <div className="notification-right-wrapper">
          <div className="notification-like-avatars">
            <Avatar className="notification-like-avatar" />
            <IconButton className="more-options">
              <IoEllipsisHorizontal />
            </IconButton>
          </div>
          <div className="notification-details">
            <div className="notification-details-header-text">
              <p>Recommended for you</p>
            </div>
            <div className="text">
              text
              more
              of
              red
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TweetNotification = () => {
  return (
    <div className="notification">
      <div className="notification-left">
        <IoChatbox className="tweet-notification" />
      </div>
      <div className="notification-right">
        <div className="notification-right-wrapper">
          <h5>Web development</h5>
          <div className="notification-like-avatars">
            <Avatar className="notification-like-avatar" />
            <IconButton className="more-options">
              <IoEllipsisHorizontal />
            </IconButton>
          </div>
          <div className="notification-details">
            <div className="notification-details-header-text">
              <h3> Jessica </h3>
              <span>Tweeted</span>
            </div>
            <div className="text">
              Some of your reply
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const RetweetNotification = () => {
  return (
    <div className="notification">
      <div className="notification-left">
        <IoStar className="retweet-notification" />
      </div>
      <div className="notification-right">
        <div className="notification-right-wrapper">
          <div className="notification-like-avatars">
            <Avatar className="notification-like-avatar" />
            <IconButton className="more-options">
              <IoEllipsisHorizontal />
            </IconButton>
          </div>
          <div className="notification-details">
            <div className="notification-details-header-text">
              <h3> IAM </h3>
              <span>Retweeted a tweet from Dalmas </span>
            </div>
            <div className="text">
              Some of your reply
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export {
  TwitterNotification,
  FollowNotification,
  LikeNotification,
  RecommendedForYouNotification,
  TweetNotification,
  RetweetNotification
}