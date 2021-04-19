import { Avatar, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { FaCheck, FaCommentAlt, FaAd, FaChartBar, FaCog, FaKeyboard } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { moreLinks, routes } from '../../constants/Constants';
import { IoFlash, IoNewspaper, IoColorPalette } from 'react-icons/io5';
import { IoMdHelpCircleOutline } from 'react-icons/io';

const MenuLinks = (props) => {

  // const active = useSelector(selectActiveSidebarLink);
  // const dispatch = useDispatch();
  const history = useHistory();

  const ActivePath = history.location.pathname;
  // console.log('PATH', ActivePath)
  const [activeLink, setActiveLink] = useState(ActivePath);

  useEffect(() => {
    setActiveLink(ActivePath)
  }, [ActivePath])

  return (
    <div>
      {
        routes.map((link, index) => {
          return (
            <Link key={index} to={link.to} className={`sidebar-link${activeLink === link.to ? ' active-link' : ''}`} onClick={() => {
              setActiveLink(link.to);
            }}>
              <span className="sidebar-link-icon">
                {link.icon}
              </span>
              <span className="sidebar-link-title">
                {link.title}
              </span>
            </Link>
          )
        })
      }
    </div>
  )
}

const MoreLinks = (props) => {

  // const active = useSelector(selectActiveSidebarLink);
  // const dispatch = useDispatch();
  const history = useHistory();

  const ActivePath = history.location.pathname;
  // console.log('PATH', ActivePath)
  const [activeLink, setActiveLink] = useState(ActivePath);

  useEffect(() => {
    setActiveLink(ActivePath)
  }, [ActivePath])

  return (
    <div>
      {/* {
        moreLinks.map((link, index) => {
          if (link.to === 'divider') {
            return (
              <div className="divider"></div>
            )
          }
          return (
            <Link key={index} to={link.to} className={`sidebar-more-link${activeLink === link.to ? ' active-link' : ''}`} onClick={() => {
              props.closeFunc();
              setActiveLink(link.to);
            }}>
              <span className="sidebar-link-icon">
                {link.icon}
              </span>
              <span className="sidebar-link-title">
                {link.title}
              </span>
            </Link>
          )
        })
      } */}

      <Link to='/topics' className={`sidebar-more-link ${activeLink === '/topics' ? ' active-link' : ''}`} onClick={() => { props.closeFunc(); setActiveLink('/topics'); }}>
        <span className="sidebar-link-icon">
          {<FaCommentAlt />}
        </span>
        <span className="sidebar-link-title">
          Topics
        </span>
      </Link>

      <Link to='/moments' className={`sidebar-more-link ${activeLink === '/moments' ? ' active-link' : ''}`} onClick={() => { props.closeFunc(); setActiveLink('/topics'); }}>
        <span className="sidebar-link-icon">
          {<IoFlash />}
        </span>
        <span className="sidebar-link-title">
          Moments
        </span>
      </Link>

      <div className={`sidebar-more-link ${activeLink === '/topics' ? ' active-link' : ''}`}
        onClick={() => { props.closeFunc(); setActiveLink('/topics'); props.newsFunc() }}>
        <span className="sidebar-link-icon">
          {<IoNewspaper />}
        </span>
        <span className="sidebar-link-title">
          News letter
        </span>
      </div>

      <Link to='/twitter-ads' className={`sidebar-more-link ${activeLink === '/twitter-ads' ? ' active-link' : ''}`} onClick={() => { props.closeFunc(); setActiveLink('/topics'); }}>
        <span className="sidebar-link-icon">
          {<FaAd />}
        </span>
        <span className="sidebar-link-title">
          Twitter ads
        </span>
      </Link>

      <Link to='/analytics' className={`sidebar-more-link ${activeLink === '/analytics' ? ' active-link' : ''}`} onClick={() => { props.closeFunc(); setActiveLink('/topics'); }}>
        <span className="sidebar-link-icon">
          {<FaChartBar />}
        </span>
        <span className="sidebar-link-title">
          Analytics
        </span>
      </Link>

      <div className="divider" />

      <Link to='/settings-and-privacy' className={`sidebar-more-link ${activeLink === '/settings-and-privacy' ? ' active-link' : ''}`} onClick={() => { props.closeFunc(); setActiveLink('/topics'); }}>
        <span className="sidebar-link-icon">
          {<FaCog />}
        </span>
        <span className="sidebar-link-title">
          Settings and privacy
        </span>
      </Link>

      <Link to='/help-center' className={`sidebar-more-link ${activeLink === '/help-center' ? ' active-link' : ''}`} onClick={() => { props.closeFunc(); setActiveLink('/topics'); }}>
        <span className="sidebar-link-icon">
          {<IoMdHelpCircleOutline size={20} />}
        </span>
        <span className="sidebar-link-title">
          Help center
        </span>
      </Link>

      <div className={`sidebar-more-link ${activeLink === '/display' ? ' active-link' : ''}`}
        onClick={() => { props.displayFunc(); setActiveLink('/topics'); props.closeFunc(); }}>
        <span className="sidebar-link-icon">
          {<IoColorPalette />}
        </span>
        <span className="sidebar-link-title">
          Display
        </span>
      </div>

      <div className={`sidebar-more-link ${activeLink === '/keyboard-shortcuts' ? ' active-link' : ''}`}
        onClick={() => { props.closeFunc(); setActiveLink('/topics'); props.keyboardFunc() }}>
        <span className="sidebar-link-icon">
          {<FaKeyboard />}
        </span>
        <span className="sidebar-link-title">
          Keyboard shortcuts
        </span>
      </div>

    </div>
  )
}

const MoreAccountOptions = () => {

  return (
    <div className="user-account-options">

      <div className="sidebar-bottom-user-details">
        <Avatar src="https://pbs.twimg.com/profile_images/1357950864674205696/8bVQrFvB_400x400.jpg" />
        <div className="middle-details">
          <h3>Dalmas Ogembo</h3>
          <p>@dalmasonto</p>
        </div>
        <IconButton className="last-icon">
          <FaCheck />
        </IconButton>
      </div>

      <div className="divider"></div>

      <div className="sidebar-bottom-add-account">
        <p> Add an existing account </p>
      </div>

      <div className="divider"></div>

      <div className="sidebar-bottom-logout">
        <p> Log out @dalmasonto </p>
      </div>

    </div>
  )
}

export { MenuLinks, MoreAccountOptions, MoreLinks }