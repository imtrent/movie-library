import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalStyles } from './../components/Settings';
import Dashboard from './../pages/Dashboard';
import NotFound from './../pages/NotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <GlobalStyles />
            <Switch>
                <Route path="/" exact={true} component={Dashboard} />
                <Route
                    path="/category/:type"
                    render={props => <Dashboard {...props} />}
                />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
};

export default AppRouter;
