import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to MintPay OTC</Text>
      <Text>This is the home screen of your application.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 32,
    backgroundColor: '#f00',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});

export default HomeScreen;
