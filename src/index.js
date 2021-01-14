import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import App from './App';
import combineReducers from "./store/index";
const middle = [thunk]
const store = createStore(combineReducers, applyMiddleware(...middle));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
