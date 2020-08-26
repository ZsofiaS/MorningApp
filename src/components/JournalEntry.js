import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import colours from '../../constants/colours.js';
import Moment from 'react-moment';

export default function JournalEntry(props) {

  const convertDate = (date) => {
    return (
      <Moment element={Text} format='Do MMM YYYY HH:mm'>{date}</Moment>
    );
  };

  return(
    <View
      key={props.i}
      style={styles.entryContainer}
      id={props.i}>
      <View style={styles.entryTitle}>
        <Text
          style={styles.entryDate}>
          {convertDate(props.date)}
        </Text>
        <TouchableOpacity
          onPress={props.removeEntry}
        >
            <Icon
              name='trash'
              type='clear'
              size={15}
              color={colours.beige}
            />
        </TouchableOpacity>
      </View>
      <View
        style={styles.entryContentContainer}>
        <Text
          style={styles.entryContent}>
          {props.entry}
        </Text>
      </View>
    </View>
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
    fontSize: 20,
    marginVertical: 60,
    paddingHorizontal: 50,
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
