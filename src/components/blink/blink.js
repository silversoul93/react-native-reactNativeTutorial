import React, { Component } from 'react';

import { AppRegistry, View, Text } from 'react-native';

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };

        setInterval(() => {
            this.setState(previousState => {
                return { isShowingText: !previousState.isShowingText };
            });
        }, Math.random() * 2000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : '';
        return (
            <Text> {display} </Text>
        );
    }
}

export default class BlinkApp extends Component {
    render(){
        return(
            <View style={{alignItems: 'center'}}>
                <Blink text='My name is Ciccio!' />
                <Blink text='Now you see me!' />
                <Blink text='Now you dont see me' />
            </View>
        );
    }
}

AppRegistry.registerComponent('reactNativeTutorial', () => BlinkApp);