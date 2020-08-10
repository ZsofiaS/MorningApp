import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import colours from '../../constants/colours.js';

export default function GratitudeScreen() {
  const [entry, setEntry] = useState('');
  const [entryList, setEntryList] = useState([]);

  const showEntry = () => {
    setEntry(entry);
    setEntryList([...entryList, entry]);
    setEntry('');
    console.log("hello")
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled'>
      <Text
        style={styles.title}>
        What are you grateful for today?
      </Text>
      <TextInput
        multiline={true}
        numberOfLines={4}
        onChangeText = { value => setEntry(value)}
        value={entry}
        style={{paddingHorizontal: 50, fontSize: 18}}
        inputContainerStyle={styles.input}
        placeholder="A good night's sleep? Sunny weather?"
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
      <ScrollView
        contentContainerStyle={styles.entryListContainer}
        keyboardShouldPersistTaps='handled'>
      {
        entryList.map((item, i) => {
          return(
            <View
              style={styles.entryContainer}
              key={i}>
              <Text>
                {item}
              </Text>
            </View>
        )
        })
      }
    </ScrollView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 50
  },
  title: {
    color: colours.primaryColour,
    fontSize: 20,
    marginVertical: 20,
    paddingHorizontal: 50
  },
  entryListContainer: {
    alignItems: 'center'
  },
  entryContainer: {
    backgroundColor: colours.lightPurple,
    width: '80%',
    padding: 20,
    borderRadius: 5,
    marginVertical: 10
  }
})
