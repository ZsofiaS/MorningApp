import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { withNavigation } from 'react-navigation';
import colours from '../../constants/colours.js';

export default function HomeScreen({navigation}) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Have a great morning!</Text>
        <View style={styles.listContainer}>
          <View style={styles.bContainer}>
            <Image
              style={styles.image}
              source={require('../../images/lotus-position-2.png')}
            />
            <Button
              testID={'breathButton'}
              titleStyle={{
                  color: colours.primaryColour,
                  fontSize: 20
                }}
              type='clear'
              title="Take a break and breath"
              onPress={() => navigation.navigate('Breath')}/>
          </View>
          <View style={styles.bContainer}>
            <Image
              style={styles.image}
              source={require('../../images/branch.png')}
            />
            <Button
              titleStyle={{
                color: colours.primaryColour,
                fontSize: 20
              }}
              type='clear'
              title="Gratitude"
              onPress={() => navigation.navigate('Gratitude')}/>
          </View>
          <View style={styles.bContainer}>
            <Image
              style={styles.image}
              source={require('../../images/lotus.png')}
            />
            <Button
              titleStyle={{
                color: colours.primaryColour,
                fontSize: 20
              }}
              type='clear'
              title="Daily affirmation"
              onPress={() => navigation.navigate('Affirmations')}/>
            </View>
        </View>
        <StatusBar
            style="auto" />
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',

  },
  title: {
    color: colours.purple,
    fontSize: 25,
    marginVertical: 100,
    paddingHorizontal: 50
  },
  image: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: 60,
    height: 60,
  },
  listContainer: {
    marginVertical: -15
  },
  bContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  }
});
