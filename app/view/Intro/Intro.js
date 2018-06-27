import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Animated,
    Image,
    ScrollView,
    Dimensions,
    StatusBar,
    View,
    Text,
    Button,
} from 'react-native';

// Modules
import { connect } from 'react-redux';

// Local Relatives
import styles from './styles';
import { changeFlow, navigate, resetFlow } from '../../actions';

const window = Dimensions.get('window');

class Intro extends Component {
    static propTypes = {
        introViewed: PropTypes.func,
    };

    constructor(props) {
        super(props);

        this.state = {
            scrollX: new Animated.Value(0),
        };
    }

    scrollViewOnMomentumScrollEnd(event) {
        const scrollX = event.nativeEvent.contentOffset.x;
        if (scrollX > window.width * 3) {
            this.props.changeFlow('DemoRoot')
        }
    }

    render() {
        const width = window.width;

        return (
            <View style={styles.container}>
                <StatusBar animated barStyle="light-content" />
                <ScrollView
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }],
                    )}
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={1}
                    onMomentumScrollEnd={event => this.scrollViewOnMomentumScrollEnd(event)}
                    showsHorizontalScrollIndicator={false}
                    testID={'view.app.intro:scrollview'}
                >
                    <View style={styles.appIntro}>
                        <Text testID={'app:welcome'}>
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
                                this.props.changeFlow('DemoRoot')
                            }}
                            testID={'app:button.demo'}
                            title={'Go to Demo Flow'}
                        />
                    </View>
                    <View style={styles.appIntro} testID={'intro:page.1'}>
                        <Text style={{color: 'red'}}>{'Page 2'}</Text>
                    </View>
                    <View style={styles.appIntro} >
                        <Text style={{color: 'red'}}>{'Page 3'}</Text>
                    </View>
                    <View style={styles.appIntro} >
                        <Text style={{color: 'red'}}>{'Page 4'}</Text>
                    </View>
                    <View style={styles.appIntro}  />
                </ScrollView>
            </View>
        );
    }
}

const mapDispatchToProps = {
    navigate,
    resetFlow,
    changeFlow,
};

export default connect(null, mapDispatchToProps)(Intro);

