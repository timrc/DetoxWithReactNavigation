/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {
    StackNavigator,
    addNavigationHelpers,
} from 'react-navigation';
import {
    createReduxBoundAddListener,
    createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {
    Provider,
    connect,
} from 'react-redux';

import { NAVIGATION_NAVIGATE, NAVIGATION_BACK, NAVIGATION_RESET } from './actions';

import {
    MainScenes,
    DemoScenes,
} from './scenes';

import configureStore from './store';


export const STACK_NAVIGATOR_CONFIG = {
    headerMode: 'none',
};

/**
 * App Navigator
 */
const AppNavigator = StackNavigator({
    MainRoot: StackNavigator(MainScenes, {
        ...STACK_NAVIGATOR_CONFIG,
        initialRouteName: 'App',
    }),
    DemoRoot: StackNavigator(DemoScenes, {
        ...STACK_NAVIGATOR_CONFIG,
        initialRouteName: 'Demo',
    }),
}, STACK_NAVIGATOR_CONFIG);

// Navigation reducer
const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('MainRoot'),
);
const defaultGetStateForAction = AppNavigator.router.getStateForAction;

const navigationReducer = (state = initialState, action) => {
    switch (action.type) {
        case NAVIGATION_NAVIGATE:
        case NAVIGATION_BACK:
        case NAVIGATION_RESET:
            return AppNavigator.router.getStateForAction(action, state) || state;
        default:
            return state;
    }
};

AppNavigator.router.getStateForAction = (action, state) => defaultGetStateForAction(action, state);

createReactNavigationReduxMiddleware(
    'root',
    state => state.nav,
);
const addListener = createReduxBoundAddListener('root');


class MyApp extends Component {
    render() {
        const navigation = addNavigationHelpers({
            dispatch: this.props.dispatch,
            route: this.props.navigation,
            state: this.props.navigation,
            addListener,
        });
        console.log('navigation',navigation)

        return (
            <AppNavigator navigation={navigation} />
        );
    }
}

const mapStateToProps = state => ({
    navigation: state.navigation,
});

const mapDispatchToProps = {
};

const AppCompose = connect(mapStateToProps, mapDispatchToProps)(MyApp);

export default class Demo extends Component {
    render() {
        const store = configureStore({
            navigation: navigationReducer,
        });
        return (
            <Provider store={store}>
                <AppCompose dispatch={store.dispatch} />
            </Provider>
        );
    }
}

