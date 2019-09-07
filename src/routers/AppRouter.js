import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieDashboard from './../pages/MovieDashboard';
import NotFound from '../pages/NotFound';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact={true} component={MovieDashboard} />
                    <Route
                        path="/category/:type"
                        render={props => <MovieDashboard {...props} />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
