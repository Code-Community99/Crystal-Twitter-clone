import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './global/styles/MainLayout.css';

import Sidebar from './global/components/globals/Sidebar';
import FixedMessaging from './global/components/globals/FixedMessaging';

import Notifications from './pages/notifications/Notifications';
import Profile from './pages/profile/Profile';
import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import Bookmarks from './pages/bookmarks/Bookmarks';

import './styles/home/Home.css'
import { useSelector } from 'react-redux';
import { selectColour } from './features/display/DisplaySlice';


function App() {

  const colour = useSelector(selectColour);

  return (
    <div className="main-wrapper" style={
      {
        '--primary-color': colour.colour,
        '--primary-bg': colour.bg,
        '--primary-global-colour': colour.global_colour
      }
    }>
      <Router>
        {/* <Navbar /> */}
        <div className="main-content">
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/notifications' component={Notifications} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/bookmarks' component={Bookmarks} />
            <Route exact path='/profile' component={Profile} />
            <Route render={() => ('PAGE NOT FOUND')} />
          </Switch>
        </div>

      </Router>
      <div className="position-relative">
        <FixedMessaging />
      </div>
    </div>
  )
}

export default App
