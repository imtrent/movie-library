import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './../components/Header';
import Browse from './../pages/Browse';
import Genre from './../pages/Genre';
import NotFound from './../pages/NotFound';
import MovieDetails from './../pages/MovieDetails';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" exact={true}>
                        <Redirect from="/" to="/browse/popular" />
                    </Route>
                    <Route path="/browse" exact={true}>
                        <Redirect from="/browse" to="/browse/popular" />
                    </Route>
                    <Route
                        path="/browse/:type"
                        exact={true}
                        render={props => <Browse {...props} />}
                    />
                    <Route
                        path="/genre/:type"
                        render={props => <Genre {...props} />}
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
