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
import { back, reset, resetFlow } from '../actions';

type Props = {};
class DemoFoo extends Component<Props> {
    render() {
        return (
            <View style={styles.container} testID={'demo.foo'}>
                <Text style={styles.welcome} testID={'demo.foo:welcome'}>
                    Welcome to Demo Foo!!
                </Text>
                <Button
                    onPress={() => {
                        this.props.back()
                    }}
                    testID={'demo.foo:button.back'}
                    title={'Go Back'}
                />
                <Button
                    onPress={() => {
                        this.props.reset('Demo')
                    }}
                    testID={'demo.foo:button.reset'}
                    title={'Reset'}
                />
                <Button
                    onPress={() => {
                        this.props.resetFlow('MainRoot')
                    }}
                    testID={'demo.foo:button.app'}
                    title={'Go to App Flow'}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(DemoFoo);
