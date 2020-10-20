import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
            onPress={() => navigation.navigate('Breathe')}
            title="Take a break and breathe"
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
          <OptionCard
            source={require('../../images/cape.png')}
            onPress={() => navigation.navigate('Sounds')}
            title="Calming sounds"
          />
        </View>
        <StatusBar
            style="auto" />
      </View>
    );
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
    marginVertical: 50,
    paddingHorizontal: 50,
    fontFamily: 'sourceSans',
    textAlign: 'center'
  },
  listContainer: {
    marginVertical: -25
  },
  bContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  }
});
