import React from 'react';
import { Text, Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import BreatheScreen from './screens/BreatheScreen';
import AffirmationsScreen from './screens/AffirmationsScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import GratitudeScreen from './screens/GratitudeScreen';
import IntentionsScreen from './screens/IntentionsScreen';
import SoundsScreen from './screens/SoundsScreen';
import colours from '../constants/colours.js';

const Navigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          headerTitle: 'Morning Ritual'
        }
      },
      Breathe: {
        screen: BreatheScreen,
        navigationOptions: {
          headerTitle: 'Breathe'
        }
      },
      Affirmations: {
        screen: AffirmationsScreen,
        navigationOptions: {
          headerTitle: 'Daily affirmation'
        }
      },
      Exercise: {
        screen: ExerciseScreen,
        navigationOptions: {
          headerTitle: 'Exercise'
        }
      },
      Gratitude: {
        screen: GratitudeScreen,
        navigationOptions: {
          headerTitle: 'Gratitude Journal'
        }
      },
      Intentions: {
        screen: IntentionsScreen,
        navigationOptions: {
          headerTitle: 'Intentions'
        }
      },
      Sounds: {
        screen: SoundsScreen,
        navigationOptions: {
          headerTitle: 'Calming Sounds'
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colours.primaryColour,
        },
        headerTintColor: colours.accentColour
      }
    }
);

const BottomNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Image style={{ width: 25, height: 25 }} 
             source={require('./../images/lake.png')} />
      );
      }
    }
  },
  Breathe: { screen: BreatheScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Image style={{ width: 25, height: 25 }} 
             source={require('./../images/lotus-position-2.png')} />
      );
      }
    }
  },
  Affirmations: { screen: AffirmationsScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Image style={{ width: 25, height: 25 }} 
             source={require('./../images/lotus.png')} />
      );
      }
    }
  },
  Gratitude: { screen: GratitudeScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Image style={{ width: 25, height: 25 }} 
             source={require('./../images/branch.png')} />
      );
      }
    }
  },
  Sounds: { screen: SoundsScreen, navigationOptions: {
    tabBarIcon: (tabInfo) => {
      return (
        <Image style={{ width: 25, height: 25 }} 
             source={require('./../images/cape.png')} />
      );
      }
    }
  },
}, {
  tabBarOptions: {
    inactiveTintColor: colours.grey,
    activeTintColor: colours.purple,
  }
});

export default createAppContainer(BottomNavigator);
