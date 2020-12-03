import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
},
});

const InfoScreen = () => {
    return (
        <View style={styles.container}>
        <Text>Info</Text>
        </View>
    );
};

export default InfoScreen;