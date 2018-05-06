import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

export default class Flex extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' }}>
                <View style={{ width: 50, backgroundColor: 'powderblue' }} />
                <View style={{ width: 50, backgroundColor: 'skyblue' }} />
                <View style={{ width: 50, backgroundColor: 'steelblue' }} />
            </View>
        );
    }
}

AppRegistry.registerComponent('reactNativeTutorial', () => Flex);
