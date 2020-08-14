import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, TextInput, FlatList, ScrollView } from 'react-native';
import { Input, Button } from 'react-native-elements';
import colours from '../../constants/colours.js';
import { init, insertEntry, fetchEntries, deleteEntry } from '../../helpers/db';
import Moment from 'react-moment';
import Icon from 'react-native-vector-icons/FontAwesome';

init().then(() => {
  console.log('Initialised database')
}).catch(err => {
  console.log('Initialising database failed');
  console.log(err);
});

export default function GratitudeScreen() {
  const [entry, setEntry] = useState('');
  const [entryList, setEntryList] = useState([]);

  const saveEntry = async () => {
    setEntry(entry);
    const dbResult = await insertEntry(entry, Date.now());
    setEntry('');
    showEntries();
  }

  const showEntries = async () => {
    const dbResult = await fetchEntries();
    setEntryList(dbResult.rows._array.reverse())
  }

  const convertDate = (date) => {
    return (
      <Moment element={Text} format='Do MMM YYYY HH:mm'>{date}</Moment>
      )
  }

  const removeEntry = async (id) => {
    const dbResult = await deleteEntry(id);
    showEntries();
  }

  useEffect(() => {
    showEntries();
  }, []);

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
          onPress={saveEntry}
          />
      </View>
      <ScrollView
        contentContainerStyle={styles.entryListContainer}>
      {
        entryList.map((item, i) => {
          return(
            <View
              key={i}
              style={styles.entryContainer}
              id={i}>
              <View style={styles.entryTitle}>
                <Text
                  style={styles.entryDate}>
                  {convertDate(item["date"])}
                </Text>
                <TouchableOpacity
                  onPress={() => removeEntry(item["id"])}
                >
                    <Icon
                      name='trash'
                      type='clear'
                      size={15}
                      color={colours.primaryColour}
                    />
                </TouchableOpacity>
              </View>
              <View
                style={styles.entryContentContainer}>
                <Text
                  style={styles.entryContent}>
                  {item["entry"]}
                </Text>

              </View>
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
    marginVertical: 60,
    paddingHorizontal: 50
  },
  entryTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  entryListContainer: {
    alignItems: 'flex-start'
  },
  entryContainer: {
    width: '100%',
    padding: 20,
  },
  entryContentContainer: {
    backgroundColor: colours.lightPurple,
    padding: 20,
    borderRadius: 5,
    marginVertical: 10
  },
  entryContent: {
    fontSize: 18
  },
  entryDate: {
    paddingLeft: 10
  }
})
