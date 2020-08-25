import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {Button} from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import colours from '../../constants/colours.js';

export default function OptionCard({navigation, source, onPress, title}) {
  return(
    <View style={styles.bContainer}>
      <Image
        style={styles.image}
        source={source}
      />
      <Button
        titleStyle={{
            color: colours.primaryColour,
            fontSize: 20
          }}
        type='clear'
        title={title}
        onPress={onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
  bContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  image: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: 60,
    height: 60,
  }
})
