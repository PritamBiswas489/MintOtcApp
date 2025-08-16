import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ScreenOne = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Screen One</Text>
            <Text>This is the first screen of your application.</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
    },
});

export default ScreenOne;
