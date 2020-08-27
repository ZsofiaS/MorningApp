import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import colours from '../../constants/colours.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Player extends React.Component {
  constructor(props) {
    super();
    this.state = {
      on: false
    }
  }

  render() {
    return(
      <View style={styles.playerContainer}>
        <Image
          style={styles.image}
          source={this.props.source}
        />
        <Text
          style={styles.description}>
          {this.props.description}
        </Text>
        <Button
          icon={
            <Icon
              name={this.state.on ? 'pause' : 'play'}
              color={colours.primaryColour}
              size={25}
            />
          }
          titleStyle={{ color: colours.primaryColour, fontSize: 20}}
          buttonStyle={{ padding: 10}}
          type='clear'
        />
        <Button
          icon={
            <Icon
              name='refresh'
              color={colours.primaryColour}
              size={25}
            />
          }
          titleStyle={{ color: colours.primaryColour, fontSize: 20}}
          buttonStyle={{ padding: 10}}
          type='clear'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    color: colours.primaryColour,
    fontSize: 20,
    marginVertical: 60,
    marginHorizontal: 50,
    textAlign: 'center'
  },
  playerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 15,
    marginHorizontal: 30
  },
  description: {
    color: colours.primaryColour,
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 10,
    marginHorizontal: 10,
  }
});
