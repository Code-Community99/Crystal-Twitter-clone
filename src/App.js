import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from './global/components/globals/Sidebar';
import FixedMessaging from './global/components/globals/FixedMessaging';
import Notifications from './pages/notifications/Notifications';
import './global/styles/MainLayout.css';
import Profile from './pages/profile/Profile';


function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <div className="main-content">
          <Sidebar />
          <Switch>
            <Route exact path='/' render={() => ('Home')} />
            <Route exact path='/notifications' component={Notifications} />
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
