import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import 'normalize.css';
import './styles/styles.scss';
import { init } from './actions/movies';

const store = configureStore();

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('react-root'));

ReactDOM.render(app, document.getElementById('react-root'));

// store.dispatch(init()).then(() => {
//     ReactDOM.render(app, document.getElementById('react-root'));
// });
