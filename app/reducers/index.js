import { combineReducers } from 'redux';

import app from './app';

export default (reducers) => {
    const rootReducer = combineReducers({
        app,
        ...reducers,
    });
    return rootReducer;
};
