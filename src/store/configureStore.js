import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import moviesReducer from './../reducers/movies';
import filtersReducer from './../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            movies: moviesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
