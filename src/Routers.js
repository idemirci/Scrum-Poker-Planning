import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './Routers.scss';
import AddStoryListScreen from './screens/AddStoryListScreen';
import ViewPlanningScrumScreen from './screens/ViewPlanningScrumScreen';

function Routers() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={AddStoryListScreen} />
                <Route
                    path="/view-planning-as-scrum-master"
                    component={ViewPlanningScrumScreen}
                />
                <Route
                    path="/view-planning-as-scrum-developer/:userId"
                    component={ViewPlanningScrumScreen}
                />

                <Route
                    path="*/:userId"
                    render={({ match }) => (
                        <Redirect
                            to={`/view-planning-as-scrum-developer/${match.params.userId}`}
                            component={ViewPlanningScrumScreen}
                        />
                    )}
                />
            </Switch>
        </div>
    );
}

export default Routers;
