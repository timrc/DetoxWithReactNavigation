import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

// Config

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    appIntro: {
        width: window.width,
        height: window.height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    introImage: {
        resizeMode: 'cover',
    },
    introOverlay1: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    introOverlay2: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
    introOverlay3: {
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    introOverlay4: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    logo: {
        width: 100,
        height: 100,
    },
    pagerWrapper: {
    },
    pager: {
        borderWidth: 1,
        borderColor: '#ffffff',
        marginHorizontal: 5,
        width: 14,
        height: 14,
        borderRadius: 14,
        overflow: 'hidden',
    },
    pagerFiller: {
        width: 13,
        height: 13,
        borderRadius: 13,
        backgroundColor: '#ffffff',
        position: 'absolute',
        left: 0,
    },
    leftSpace: {
        flex: 1,
    },
    skipIntro: {
        position: 'absolute',
        right: 0,
        paddingHorizontal: 20,
        paddingBottom: 16,
    },
});
