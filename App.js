import React, { useState } from 'react';
import Navigator from './src/Navigator';
import { View, StyleSheet } from 'react-native';
import colours from './constants/colours.js';
import Header from './src/components/Header';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const fetchFonts = () => {
  return Font.loadAsync({
    'sourceSans': require('./assets/fonts/SourceSansPro-Regular.ttf')
  });
}

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    )
  }

  return (
    <>
    <Header />
    <Navigator />
    </>
  );
}

