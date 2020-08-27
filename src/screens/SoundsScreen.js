import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Player from '../components/Player';
import colours from '../../constants/colours.js';

export default function SoundsScreen() {
  return(
    <View>
      <Text
        style={styles.title}>
        Select one of the calming sounds
      </Text>
      <View
        style={styles.listContainer}
      >
        <Player
          source={require('../../images/forest.png')}
          description='Meadow (5:00)'
        />
        <Player
          source={require('../../images/lake.png')}
          description='Birds (3:00)'
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colours.primaryColour,
    fontSize: 20,
    marginVertical: 60,
    marginHorizontal: 50,
    textAlign: 'center'
  }
});
