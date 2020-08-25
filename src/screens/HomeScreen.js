import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { withNavigation } from 'react-navigation';
import colours from '../../constants/colours.js';
import OptionCard from '../components/OptionCard';

export default function HomeScreen({navigation}) {
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Have a great morning!</Text>
        <View style={styles.listContainer}>
          <OptionCard
            source={require('../../images/lotus-position-2.png')}
            onPress={() => navigation.navigate('Breath')}
            title="Take a break and breath"
          />
          <OptionCard
            source={require('../../images/branch.png')}
            onPress={() => navigation.navigate('Gratitude')}
            title="Gratitude Journal"
          />
          <OptionCard
            source={require('../../images/lotus.png')}
            onPress={() => navigation.navigate('Affirmations')}
            title="Daily affirmation"
          />
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
