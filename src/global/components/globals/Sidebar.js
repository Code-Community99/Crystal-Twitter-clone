import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { routes } from '../../constants/Constants';
import './../../styles/Sidebar.css';
import { activateLink, selectActiveSidebarLink } from './../../../features/globals/sidebarSlice';


function Sidebar() {

  return (
    <div className="sidebar">

      <div className="main-sidebar">

        <div className="main-sidebar-top">
          S
        </div>

        <MenuLinks />

      </div>
    </div>
  )
}

const MenuLinks = () => {

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
            <Link key={index} to={link.to} className={`sidebar-link${activeLink === link.to ? ' active-link' : ''}`} onClick={() => setActiveLink(link.to)}>
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

export { MenuLinks };

export default Sidebar
