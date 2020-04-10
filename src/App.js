import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ViewProfile from './component/profile/ViewProfiles'

import Profile from './component/profile/Profile';
import Header from './component/header/Header';
import Home from './component/Home/Home'

export default function App() {

  return (
    <>
      
      <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/profile">
              <Profile step={3} />
            </Route>
            <Route path="/view-profile" component={ViewProfile}></Route>
          </Switch>
      </Router>
    </>
  );
}
