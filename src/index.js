import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import Routers from './Routers';
import store from './store/store';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routers />
        </Router>
    </Provider>,
    document.getElementById('root')
);
