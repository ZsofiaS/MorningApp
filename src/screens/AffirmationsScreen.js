import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require('../../images/lotus.png')}
          />
        </View>
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
    textAlign: 'center',
    lineHeight: 40
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10
  },
  image: {
    width: 120,
    height: 120
  },
})
