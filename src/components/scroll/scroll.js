import React, { Component } from 'react';
import { AppRegistry, ScrollView, Image, Text, View } from 'react-native';

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
    render() {
        // NB. nelle Image, la source NON puo' essere un icon, ovvero un file .ico
        // Su Android non si puo' avere lo scroll bidirezionale, verticale O orizzontale. Su IoS si puo'
        return (
            <ScrollView>
                <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Text style={{ fontSize: 96 }}>If you like</Text>
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Text style={{ fontSize: 96 }}>Scrolling down</Text>
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Text style={{ fontSize: 96 }}>What's the best</Text>
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Text style={{ fontSize: 96 }}>Framework around?</Text>
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Image source={require('./favicon.png')} />
                <Text style={{ fontSize: 80 }}>React Native</Text>
            </ScrollView>
        );
    }
}

// skip these lines if using Create React Native App
AppRegistry.registerComponent('reactNativeTutorial', () => IScrolledDownAndWhatHappenedNextShockedMe);
