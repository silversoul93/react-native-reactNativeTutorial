import React, { Component } from 'react';
import { AppRegistry, ScrollView, FlatList, SectionList, StyleSheet, Text, View } from 'react-native';

export default class FlatListBasics extends Component {
    //Se non le metto in una ScrollView non si vede nulla, poiche' superano le dimensioni dello schermo
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={[
                            { key: 'Devin' },
                            { key: 'Jackson' },
                            { key: 'James' },
                            { key: 'Joel' },
                            { key: 'John' },
                            { key: 'Jillian' },
                            { key: 'Jimmy' },
                            { key: 'Julie' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                </View>
                <View style={styles2.container}>
                    <SectionList
                        sections={[
                            { title: 'D', data: ['Devin'] },
                            { title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie'] },
                        ]}
                        renderItem={({ item }) => <Text style={styles2.item}>{item}</Text>}
                        renderSectionHeader={({ section }) => <Text style={styles2.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        paddingBottom: 30 
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('reactMativeTutorial', () => FlatListBasics);
