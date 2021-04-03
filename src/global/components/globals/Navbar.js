import React from 'react';
import './../../styles/Navbar.css';
import { FaBars, FaBell, FaSearch } from 'react-icons/fa';
import Avatar from '@uiw/react-avatar';
import { Badge, Drawer } from 'uiw';
import { MenuLinks } from './Sidebar';

function Navbar() {
  return (
    <div className="navbar">

      {/* START Top Navbar */}
      <div className="top-navbar">
        <div className="top-navbar-left">
          <div>
            <FaBars />
          </div>
          <h1>
            {/* Project Manager */}
          </h1>
        </div>
        <div className="top-navbar-right">

          <div className="top-navbar-right-l">
            <div className="top-navbar-right-l-search">
              <FaSearch className="top-navbar-right-l-icon" />
              <input placeholder="Search..." />
            </div>
          </div>

          <div className="top-navbar-right-r">
            <Badge count={100}>
              <FaBell className="top-navbar-right-r-icon" />
            </Badge>
            <Avatar className="top-navbar-right-r-avatar">
              S
            </Avatar>
          </div>

        </div>
      </div>
      {/* END Top Navbar */}

      <Drawer isOpen={true} placement='left'>
        <MenuLinks />
      </Drawer>


    </div> // Navbar
  )
}

export default Navbar
