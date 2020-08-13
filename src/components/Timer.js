import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import colours from '../../constants/colours.js';

export default class Timer extends React.Component {
  constructor(){
    super();
    this.state = {
      mins: 5,
      secs: 0,
      on: false
    }
  }

  incrementMins = () => {
    this.setState(prevState => {
      return {mins: prevState.mins + 1}
    })
  }

  decrementMins = () => {
    if (this.state.mins > 1) {
      this.setState(prevState => {
        return {mins: prevState.mins - 1}
      })
    }
  }

  render() {
    return (
      <View>
        <Text
          style={styles.timer}>
          {this.state.mins}:{this.state.secs}
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              title='-'
              titleStyle={{ color: colours.primaryColour, fontSize: 20}}
              buttonStyle={{ padding: 15}}
              type='clear'
              onPress={this.decrementMins} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='Start'
              titleStyle={{ color: colours.primaryColour, fontSize: 20}}
              buttonStyle={{ padding: 15}}
              type='clear'
              onPress={console.log("yo")}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title='+'
              titleStyle={{ color: colours.primaryColour, fontSize: 20}}
              buttonStyle={{ padding: 15}}
              type='clear'
              onPress={this.incrementMins} />
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timer: {
    marginVertical: 80,
    fontSize: 100,
    textAlign: 'center',
    color: colours.primaryColour
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10
  },
  buttonContainer: {
    width: '25%',
    marginHorizontal: 10
  },
})
