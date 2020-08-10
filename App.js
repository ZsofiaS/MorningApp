import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Good morning!</Text>
      <ThemeProvider>
        <Button titleStyle={{ color: 'magenta' }} type='clear' title="Breath" />
        <Button type='clear' title="Affirmations" />
        <Button titleStyle={{ color: 'magenta' }} type='clear' title="Intentions" />
        <Button type='clear' title="Gratitude" />
        <Button titleStyle={{ color: 'magenta' }} type='clear' title="Exercise" />
      </ThemeProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
