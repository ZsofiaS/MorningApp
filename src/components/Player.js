import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';
import colours from '../../constants/colours.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Audio } from 'expo-av';

export default class Player extends React.Component {
  constructor(props) {
    super();
    this.state = {
      on: false,
      playbackInstance: null,
      soundObject: {}
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
      //this.loadAudio(uri);
    } catch(error) {
      console.log(error);
    }
  }

  async loadAudio(uri) {
    try {
      const { sound: soundObject, status } = await
           Audio.Sound.createAsync(
             uri,
             { shouldPlay: true, isLooping: true });
      await soundObject.playAsync();
      this.setState({
        soundObject: soundObject
      })
    }
    catch (error) {
      console.log(error);
    }
  }

  playStopSound = async (uri) => {
    const { on, soundObject } = this.state;
    if (on) {
      await soundObject.pauseAsync();
      this.setState({
        on: false
      });
      this.props.setPlay();
    } else if (!on && !this.props.isPlaying) {
      await this.loadAudio(uri);
      this.setState({
        on: true
      });
      this.props.setPlay();
      if (soundObject.didJustFinish) {
        this.setState({
          on: false
        })
      }
    } else {
      return;
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
          onPress={() => this.playStopSound(this.props.uri)}
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
    marginHorizontal: 35
  },
  description: {
    color: colours.primaryColour,
    fontSize: 20,
    marginHorizontal: 15,
    fontFamily: 'sourceSans'
  },
  image: {
    width: 80,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 10,
  }
});
