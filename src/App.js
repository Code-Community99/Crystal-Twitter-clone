import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';
import Sidebar from './global/components/globals/Sidebar';
import FixedMessaging from './global/components/globals/FixedMessaging';
import Explore from './pages/explore/Explore';
// import Navbar from './global/components/globals/Navbar';
import Notifications from './pages/notifications/Notifications';


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
