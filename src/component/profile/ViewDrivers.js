import React from 'react';
import { Switch, Route } from "react-router-dom";
import ViewProfile from './ViewProfiles'
import ViewProfileDriver from './ViewProfileDriver'

const ViewDrivers = () => {

    return(
        <div>
            <Switch>
                <Route exact path="/view-profile" component={ViewProfile} />
                <Route path="/view-profile/:id" component={ViewProfileDriver} />
            </Switch>
        </div>
    )

}

export default ViewDrivers