import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Index';
import Login from './pages/Login/Index';
import New from './pages/New/Index';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={`/`} exact component={Login} />
                <Route path={`/dashboard`} exact component={Dashboard} />
                <Route path={`/new`} exact component={New} />
            </Switch>
        </BrowserRouter>
    );
}
