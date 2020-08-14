import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colours from '../../constants/colours.js';

export default class AffirmationsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      affirmation: null
    }
  }

  componentDidMount = () => {
    fetch('https://www.affirmations.dev')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          affirmation: responseJson["affirmation"]
        })
      })
  };

  render() {
    return (
      <View>
        <Text style={styles.content}>{this.state.affirmation == null ? '' : `"${this.state.affirmation}"`}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    color: colours.primaryColour,
    fontSize: 25,
    marginVertical: 140,
    paddingHorizontal: 50,
    textAlign: 'center'
  }
})
