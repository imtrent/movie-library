import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './../components/Header';
import Browse from './../pages/Browse';
import Genre from './../pages/Genre';
import Search from './../pages/Search';
import NotFound from './../pages/NotFound';
import MovieDetails from './../pages/MovieDetails';
import Footer from './../components/Footer';

const AppRouter = () => {
    return (
        <BrowserRouter>
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
                <Route
                    path="/search/:search"
                    render={props => <Search {...props} />}
                />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
