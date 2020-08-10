import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';
import Navigator from './src/Navigator';


export default function App() {
  return (
    <Navigator />
  );
}
