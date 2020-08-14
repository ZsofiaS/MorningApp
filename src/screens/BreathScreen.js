import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Timer from '../components/Timer';
import colours from '../../constants/colours.js';

export default function BreathScreen() {
  return (
    <View>
      <Text
        style={styles.title}>
        Focus on your breathing
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../images/lotus-position-2.png')}
        />
      </View>
      <Timer />
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
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15
  },
  image: {
    width: 120,
    height: 120
  }
})
