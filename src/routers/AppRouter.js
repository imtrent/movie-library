import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './../components/Navigation';
import Dashboard from './../pages/Dashboard';
import NotFound from './../pages/NotFound';
import MovieDetails from './../pages/MovieDetails';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route path="/" exact={true} component={Dashboard} />
                    <Route path="/popular" exact={true} component={Dashboard} />
                    <Route
                        path="/genre/:type"
                        render={props => <Dashboard {...props} />}
                    />
                    <Route
                        path="/movie/:id"
                        render={props => <MovieDetails {...props} />}
                    />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default AppRouter;
