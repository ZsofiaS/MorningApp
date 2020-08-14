import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import colours from '../../constants/colours.js';
import { Audio } from 'expo-av';

export default class Timer extends React.Component {
  constructor(){
    super();
    this.state = {
      mins: 5,
      secs: 0,
      on: false,
      button: 'Start',
      playbackInstance: null
    }
  }

  async componentDidMount() {
    try {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        playsInSilentModeIOS: true,
        interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
        shouldDuckAndroid: true,
        staysActiveInBackground: true,
        playThroughEarpieceAndroid: true
      })
    } catch(err) {
      console.log(err)
    }
  }

  async loadAudio() {
    try {
      const { sound: soundObject, status } = await
           Audio.Sound.createAsync(
             { uri: 'https://dl.dropboxusercontent.com/s/8m6fgyybqijxdn0/ding.wav'},
             { shouldPlay: true });
        await soundObject.playAsync();
        }
    catch (error) {
      console.log(error);
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

  startStopTimer = () => {
    if (this.state.on) {
      this.setState({
        on: false,
        button: 'Start'
      });
    clearInterval(this.state.update);
    } else {
      this.loadAudio();
      this.setState({
        on: true,
        button: 'Pause',
        update: setInterval(this.updateTime, 1000)
      })
    }
  }

  updateTime = () => {
    if (this.state.secs != 0) {
      this.setState(prevState => {
        return {secs: prevState.secs -1 }
      });
    } else if (this.state.mins != 0) {
      this.setState(prevState => {
        return {
          secs: 59,
          mins: prevState.mins -1
        }
      })
    } else {
      this.loadAudio();
      clearInterval(this.state.update);
    }
  }

  render() {
    return (
      <View>
        <Text
          style={styles.timer}>
          {this.state.mins}:{this.state.secs <= 9 ? `0${this.state.secs}` : this.state.secs}
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
              title={this.state.button}
              titleStyle={{ color: colours.primaryColour, fontSize: 20}}
              buttonStyle={{ padding: 15}}
              type='clear'
              onPress={this.startStopTimer}/>
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
