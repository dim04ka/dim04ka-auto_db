import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//import ViewProfile from './component/profile/ViewProfiles'

import Profile from './component/profile/Profile';
import Header from './component/header/Header';
import Home from './component/Home/Home';
//import ViewProfileDriver from './component/profile/ViewProfileDriver';
import ViewDrivers from './component/profile/ViewDrivers';

export default function App() {

  return (
    <>
      
      <Router>
        <Header/>
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/profile">
              <Profile/>
            </Route>
            <Route patch='/view-profile' >
              <ViewDrivers />
            </Route>
            {/* <Route path="/view-profile" component={ViewProfile}></Route>
            <Route path="/view-profile/:id" component={ViewProfileDriver}></Route> */}
          </Switch>
      </Router>
    </>
  );
}
