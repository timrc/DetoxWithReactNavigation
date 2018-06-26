import { applyMiddleware, compose, createStore } from 'redux';

import configureReducer from './reducers';
const reduxLogger = require('redux-logger');

export default function configureStore(reducers) {
    const middleware = [
        reduxLogger.createLogger(),
    ];

    const store = createStore(
        configureReducer(reducers),
        {},
        compose(
            applyMiddleware(...middleware),
        ),
    );

    return store;
}
