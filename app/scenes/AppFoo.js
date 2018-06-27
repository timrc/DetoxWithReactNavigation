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
import { back, reset, resetFlow, changeFlow } from '../actions';

type Props = {};
class AppFoo extends Component<Props> {
    render() {
        return (
            <View style={styles.container} testID={'app.foo'}>
                <Text style={styles.welcome} testID={'app.foo:welcome'}>
                    Welcome to App Foo!!
                </Text>
                <Button
                    onPress={() => {
                        this.props.back()
                    }}
                    testID={'app.foo:button.back'}
                    title={'Go Back'}
                />
                <Button
                    onPress={() => {
                        this.props.reset('App')
                    }}
                    testID={'app.foo:button.reset'}
                    title={'Reset'}
                />
                <Button
                    onPress={() => {
                        this.props.changeFlow('DemoRoot')
                    }}
                    testID={'app.foo:button.demo'}
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
    back,
    reset,
    resetFlow,
    changeFlow,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppFoo);
