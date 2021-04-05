import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home';
import Sidebar from './global/components/globals/Sidebar';
import FixedMessaging from './global/components/globals/FixedMessaging';
// import Navbar from './global/components/globals/Navbar';


function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <div className="main-content">
          <Sidebar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/account/sign_up' render={() => ('SIGN UP')} />
            <Route exact path='/account/sign_in' render={() => ('SIGN IN')} />
            <Route exact path='/projects' render={() => ('PROJECTS')} />
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
