import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import BreathScreen from './screens/BreathScreen';
import AffirmationsScreen from './screens/AffirmationsScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import GratitudeScreen from './screens/GratitudeScreen';
import IntentionsScreen from './screens/IntentionsScreen';
import colours from '../constants/colours.js';

const Navigator = createStackNavigator(
    {
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          headerTitle: 'Morning Ritual'
        }
      },
      Breath: {
        screen: BreathScreen,
        navigationOptions: {
          headerTitle: 'Breath'
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

export default createAppContainer(Navigator);
