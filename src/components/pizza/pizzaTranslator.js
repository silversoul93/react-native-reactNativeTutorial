import React, { Component } from 'react';
import { Alert, AppRegistry, Text, TextInput, View, Button } from 'react-native';

export default class Pizza extends Component {

    constructor(props) {
        super(props);
        this.state = { text: '' };
    }

    render() {
        return (
            <View>
                <View style={{ padding: 10 }}>
                    <TextInput
                        style={{ height: 40 }}
                        placeholder="Type here to translate!"
                        onChangeText={(text) => this.setState({ text })}
                    />

                    <Text
                        style={{ padding: 10, fontSize: 42 }}>
                        {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                    </Text>
                </View>
                <View style={{ padding: 30 }}>
                    <Button onPress={() => {
                        Alert.alert("PIZZA!", "Do you like pizza?",
                            [{ text: "YES", onPress: () => { Alert.alert("GREAT!", "Good job my friend!\n🍕🍕🍕🍕🍕🍕🍕") } }, 
                             { text: "no", onPress: () => { Alert.alert("Oh shit!", "You suck man.") } }]);
                    }} title="Press me, I'll like it!" />
                </View>
            </View>
        );
    }

}

AppRegistry.registerComponent('reactNativeTutorial', () => Pizza);
