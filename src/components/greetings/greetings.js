import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

class Greeting extends Component {
    render() {
        return (
            <Text>Hello {this.props.name}! </Text>
        );
    }
}

export default class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <Greeting name="silversoul" />
                <Greeting name="saruzza" />
                <Greeting name="safra srl" />
            </View>
        );
    }
}

AppRegistry.registerComponent("reactNativeTutorial", () => LotsOfGreetings);