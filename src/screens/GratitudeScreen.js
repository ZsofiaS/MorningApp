import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import colours from '../../constants/colours.js';

export default function GratitudeScreen() {
  const [entry, setEntry] = useState('');
  const [entryList, setEntryList] = useState([]);

  const showEntry = () => {
    setEntry(entry);
    setEntryList([...entryList, entry]);
    setEntry('');
  }

  return (
    <View>
      <Text>What are you grateful for today?</Text>
      <Input
        multiline={true}
        numberOfLines={4}
        onChangeText = { value => setEntry(value)}
        value={entry}
        />
      <View style={styles.buttonContainer}>
        <Button
          titleStyle={{ color: colours.primaryColour}}
          buttonStyle={{ padding: 15}}
          type='clear'
          title='Save journal entry'
          onPress={showEntry}
          />
      </View>
      {
        entryList.reverse().map((item, i) => {
          return(
          <Text key={i}>{item}</Text>
        )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center'
  }
})
