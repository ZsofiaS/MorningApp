import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { withNavigation } from 'react-navigation';
import colours from '../../constants/colours.js';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Have a great morning!</Text>
      <ThemeProvider>
        <Button
          titleStyle={{
              color: colours.primaryColour,
              fontSize: 20
            }}
          type='clear'
          title="Take a break and breath"
          onPress={() => navigation.navigate('Breath')}/>
        <Button
          titleStyle={{
            fontSize: 20
          }}
          type='clear'
          title="Gratitude"
          onPress={() => navigation.navigate('Gratitude')}/>
        <Button
          titleStyle={{
            color: colours.primaryColour,
            fontSize: 20
          }}
          type='clear'
          title="Daily affirmation"
          onPress={() => navigation.navigate('Affirmations')}/>
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
    justifyContent: 'flex-start',
  },
  title: {
    color: colours.primaryColour,
    fontSize: 20,
    marginVertical: 100,
    paddingHorizontal: 50
  },
});
