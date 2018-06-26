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

// Actions
import { navigate, resetFlow } from '../actions';

type Props = {};
class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container} testID={'app'}>
                <Text style={styles.welcome} testID={'app:welcome'}>
                    Welcome to App!!
                </Text>
                <Button
                    onPress={() => {
                        this.props.navigate({
                            scene: 'AppFoo',
                        })
                    }}
                    testID={'app:button.foo'}
                    title={'Go to Page Foo'}
                />
                <Button
                    onPress={() => {
                        this.props.resetFlow('DemoRoot')
                    }}
                    testID={'app:button.demo'}
                    title={'Go to Demo Flow'}
                />
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
