import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Create = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600', // Matches the font weight of Profile title
    color: 'black',    // Matches the color used in Profile title
  },
});

export default Create;
