import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.container}>
        <TextInput
            style={styles.input}
            placeholder="Type something..."
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
});
