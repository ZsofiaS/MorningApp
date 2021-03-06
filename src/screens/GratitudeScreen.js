import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image} from 'react-native';
import { Button } from 'react-native-elements';
import colours from '../../constants/colours.js';
import { init, insertEntry, fetchEntries, deleteEntry } from '../../helpers/db';
import Moment from 'react-moment';
import JournalEntry from '../components/JournalEntry';

init().then(() => {
  console.log('Initialised database');
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
  };

  const showEntries = async () => {
    const dbResult = await fetchEntries();
    setEntryList(dbResult.rows._array.reverse());
  };

  const convertDate = (date) => {
    return (
      <Moment element={Text} format='Do MMM YYYY HH:mm'>{date}</Moment>
    );
  };

  const removeEntry = async (id) => {
    const dbResult = await deleteEntry(id);
    showEntries();
  };

  useEffect(() => {

    showEntries();
  }, []);

  return (

    <ScrollView
      keyboardShouldPersistTaps='handled'
      style={styles.container}>
      <Text
        style={styles.title}>
        What are you grateful for today?
      </Text>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../images/branch.png')}
        />
      </View>
      <TextInput
        multiline={true}
        numberOfLines={4}
        onChangeText = { value => setEntry(value)}
        value={entry}
        style={{paddingHorizontal: 50, fontSize: 18, fontFamily: 'sourceSans'}}
        inputContainerStyle={styles.input}
        placeholder="A good night's sleep? Sunny weather?"
      />

      <View style={styles.buttonContainer}>
        <Button
          titleStyle={{ color: colours.primaryColour, fontFamily: 'sourceSans'}}
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
            <JournalEntry
              key={i}
              i={i}
              date={item["date"]}
              id={item["id"]}
              entry={item["entry"]}
              removeEntry={() => removeEntry(item["id"])}
            />
          );
        })
      }
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 50
  },
  title: {
    color: colours.primaryColour,
    fontSize: 25,
    marginVertical: 50,
    paddingHorizontal: 50,
    textAlign: 'center',
    fontFamily: 'sourceSans'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 15
  },
  image: {
    width: 120,
    height: 120
  },
  entryTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'sourceSans'
  },
  entryListContainer: {
    alignItems: 'flex-start'
  },
  entryContainer: {
    width: '100%',
    padding: 20,
  },
  entryContentContainer: {
    backgroundColor: colours.beige,
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
});
