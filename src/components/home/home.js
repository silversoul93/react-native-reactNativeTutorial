import React, { Component } from 'react';

import { Text } from 'react-native';

export default class Home extends Component {
    // quando text diventa valorizzato, non viene comunque stampato in output nell'Element Text, non si aggiorna da solo, devo trovare un modo
    getMessage() {
        let text = "";
        fetch("https://social-login-be.mybluemix.net/welcome").then( (resolved) => {
            return resolved.status;
        }).catch( (rejected) => {
            return "rejected";
        });
    }
    
    render() {
        return (
            <Text>Hello silversoul, this is the result of the get request: {this.getMessage()} </Text>
        );
    }
}