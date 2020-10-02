import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Audio } from 'expo-av';
import Icon from 'react-native-vector-icons/FontAwesome';
import colours from '../../constants/colours.js';

export default class Timer extends React.Component {
  constructor(){
    super();
    this.state = {
      mins: 5,
      secs: 0,
      on: false,
      playbackInstance: null
    };
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
        playThroughEarpieceAndroid: false
      });
    } catch(err) {
      console.log(err);
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
        return {mins: prevState.mins - 1};
      });
    }
  }

  startStopTimer = () => {
    if (this.state.on) {
      this.setState({
        on: false
      });
    clearInterval(this.state.update);
    } else {
      this.loadAudio();
      this.setState({
        on: true,
        update: setInterval(this.updateTime, 1000)
      });
    }
  };

  updateTime = () => {
    if (this.state.secs != 0) {
      this.setState(prevState => {
        return {secs: prevState.secs -1 };
      });
    } else if (this.state.mins != 0) {
      this.setState(prevState => {
        return {
          secs: 59,
          mins: prevState.mins -1
        };
      });
    } else {
      this.loadAudio();
      clearInterval(this.state.update);
    }
  };

  resetTimer = () => {
    clearInterval(this.state.update);
    this.setState({
      on: false,
      mins: 5,
      secs: 0,
    });
  };

  render() {
    return (
      <View
        style={styles.timerContainer}>
        
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name={this.state.on ? 'pause' : 'play'}
                  color={colours.primaryColour}
                  size={40}
                />
              }
              titleStyle={{ color: colours.primaryColour, fontSize: 20}}
              buttonStyle={{ padding: 15}}
              type='clear'
              onPress={this.startStopTimer}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name='refresh'
                  color={colours.primaryColour}
                  size={40}
                />
              }
              titleStyle={{ color: colours.primaryColour, fontSize: 20}}
              buttonStyle={{ padding: 15}}
              type='clear'
              onPress={this.resetTimer}/>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name='plus'
                  color={colours.primaryColour}
                  size={40}
                />
              }
              titleStyle={{ color: colours.primaryColour, fontSize: 20}}
              buttonStyle={{ padding: 15}}
              type='clear'
              onPress={this.incrementMins} />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              icon={
                <Icon
                  name='minus'
                  color={colours.primaryColour}
                  size={40}
                />
              }
              titleStyle={{ color: colours.primaryColour, fontSize: 20}}
              buttonStyle={{ padding: 15}}
              type='clear'
              onPress={this.decrementMins} />
          </View>
        </View>
        <Text
          style={styles.timer}>
          {this.state.mins}:{this.state.secs <= 9 ? `0${this.state.secs}` : this.state.secs}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  timerContainer: {
    marginVertical: 20,
  },
  timer: {
    fontSize: 90,
    textAlign: 'center',
    color: colours.primaryColour
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 130,
    marginBottom: 0
  },
  buttonContainer: {
    marginHorizontal: 10
  },
})
