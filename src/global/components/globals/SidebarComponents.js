import { Avatar, IconButton } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { moreLinks, routes } from '../../constants/Constants';

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
      {
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
      }
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