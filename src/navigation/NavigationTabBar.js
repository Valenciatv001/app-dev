import React from 'react';

import {
    NativeEventEmitter,
    NativeModules,
    StyleSheet,
    View,
} from 'react-native';
import {connect} from 'react-redux';

class NavigationTabBar extends React.Component {
    constructor() {
        super();
    }

    componentWillUnmount() {
        // this.subscription.remove();
    }

    render() {
        return (
            <View style={style.tabBar}>
            </View>
        );
    }
}

const style = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        width: 300,
        bottom: 80,
        right: 0,
    },
});

export default connect(null, null)(NavigationTabBar);
