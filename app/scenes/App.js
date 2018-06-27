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

// Modules
import { connect } from 'react-redux';
import Intro from '../view/Intro';

// Actions
import { navigate, resetFlow, changeFlow } from '../actions';

type Props = {};
class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container} testID={'app'}>
                <Intro />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


const mapStateToProps = state => ({
});

const mapDispatchToProps = {
    navigate,
    resetFlow,
    changeFlow,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
