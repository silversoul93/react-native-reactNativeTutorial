import React, { Component } from 'react';
import {
    AppRegistry,
    Image
} from 'react-native';

export default class Info extends Component {
    render() {
        let pic = 'https://vignette.wikia.nocookie.net/naruto/images/4/42/Mangeky%C5%8D_Sharingan_Madara_%28Eternal%29.svg/revision/latest/scale-to-width-down/300?cb=20110803161831';
        return (
            <Image source={{uri: pic}} style={{ width: 200, height:200, alignSelf: "center"}} />
        );
    }
}

AppRegistry.registerComponent('reactNativeTutorial', () => Info);