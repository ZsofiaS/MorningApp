import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Player from '../components/Player';
import colours from '../../constants/colours.js';

export default function SoundsScreen() {
  return(
    <View>
      <Text
        style={styles.title}>
        Select a calming sound
      </Text>
      <View
        style={styles.listContainer}
      >
        <Player
          source={require('../../images/lake.png')}
          description='Birdsong'
          uri={require('../../sounds/birds2.wav')}
        />
        <Player
          source={require('../../images/lagoon-1.png')}
          description='Summer night'
          uri={require('../../sounds/summernight.mp3')}
        />
        <Player
          source={require('../../images/beach.png')}
          description='Crushing waves'
          uri={require('../../sounds/waves.wav')}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colours.primaryColour,
    fontSize: 25,
    marginVertical: 60,
    marginHorizontal: 50,
    textAlign: 'center'
  }
});
