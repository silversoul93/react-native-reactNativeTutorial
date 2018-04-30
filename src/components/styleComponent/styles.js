import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Styles extends Component {
    render() {
        return (
            <View>
                <Text style={styles.bigblue}>I'm big{'\n'}and blue!</Text>
                <Text style={styles.littlered}>I'm little and red!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bigblue: {
        color: 'blue',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 26
    },
    littlered: {
        color: 'red',
        textAlign: 'left',
        fontSize: 16
    }
});

AppRegistry.registerComponent('reactNativeTutorial', () => Styles);