import React from 'react';
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

export default createAppContainer(Navigator);
