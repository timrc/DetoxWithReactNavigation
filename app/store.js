import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import configureReducer from './reducers';
const reduxLogger = require('redux-logger');

import rootSaga from './sagas';

export default function configureStore(reducers) {
    const sagaMiddleware = createSagaMiddleware();

    const middleware = [
        sagaMiddleware,
        reduxLogger.createLogger(),
    ];

    const store = createStore(
        configureReducer(reducers),
        {},
        compose(
            applyMiddleware(...middleware),
        ),
    );

    store.runSaga = sagaMiddleware.run;
    store.runSaga(rootSaga);

    return store;
}
