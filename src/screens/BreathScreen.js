import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Timer from '../components/Timer';
import colours from '../../constants/colours.js';


export default function BreathScreen() {
  return (
    <View>
      <Text
        style={styles.title}>
        Focus on your breathing
      </Text>
      <Timer />
    </View>
  )
}


const styles = StyleSheet.create({
  title: {
    color: colours.primaryColour,
    fontSize: 20,
    marginVertical: 60,
    paddingHorizontal: 50,
    textAlign: 'center'
  }
})
