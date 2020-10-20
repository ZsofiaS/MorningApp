import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colours from '../../constants/colours.js';

export default class AffirmationsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      affirmation: null
    };
  }

  componentDidMount = () => {
    this.fetchAffirmation();
  }

  fetchAffirmation = () => {
    fetch('https://www.affirmations.dev')
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          affirmation: responseJson["affirmation"]
        })
      })
  }

  render() {
    return (
      <View>
        <Text style={styles.content}>{this.state.affirmation == null ? '' : `"${this.state.affirmation}"`}</Text>
        <TouchableOpacity style={styles.imageContainer} onPress={() => this.fetchAffirmation()}>
          <Image
            style={styles.image}
            source={require('../../images/lotus.png')}
            //onPress={this.fetchAffirmation}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  content: {
    color: colours.primaryColour,
    fontSize: 25,
    marginVertical: 110,
    paddingHorizontal: 50,
    textAlign: 'center',
    lineHeight: 40,
    fontFamily: 'sourceSans'
  },
  imageContainer: {
    //flex: 1,
    alignItems: 'center',
    marginVertical: 'auto'

  },
  image: {
    width: 120,
    height: 120
  },
})
