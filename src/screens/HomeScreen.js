import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { withNavigation } from 'react-navigation';
import colours from '../../constants/colours.js';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Good morning!</Text>
      <ThemeProvider>
        <Button
          titleStyle={{
              color: colours.primaryColour,
              fontSize: 20
            }}
          type='clear'
          title="Breath"
          onPress={() => navigation.navigate('Breath')}/>
        <Button
          titleStyle={{
            fontSize: 20
          }}
          type='clear'
          title="Gratitude"
          onPress={() => navigation.navigate('Gratitude')}/>
      </ThemeProvider>
      <StatusBar
          style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colours.accentColour,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
