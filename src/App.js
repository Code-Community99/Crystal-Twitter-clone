import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';
import Sidebar from './global/components/globals/Sidebar';
import FixedMessaging from './global/components/globals/FixedMessaging';
import Explore from './pages/explore/Explore';
// import Navbar from './global/components/globals/Navbar';
import Notifications from './pages/notifications/Notifications';
import './global/styles/MainLayout.css';
import Bookmarks from './pages/bookmarks/Bookmarks';
import Lists from './pages/lists/Lsits';
import Profile from './pages/profile/Profile';
import Messages from './pages/messages/Message';


function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <div className="main-content">
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/notifications' component={Notifications} />
            <Route exact path='/bookmarks' component={Bookmarks} />
            <Route exact path='/lists' component={Lists} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/messages' component={Messages} />
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
