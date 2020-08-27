import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colours from '../../constants/colours.js';

export default function SoundsScreen() {
  return(
    <View>
      <Text
        style={styles.title}>
        Select one of the calming sounds
      </Text>
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
