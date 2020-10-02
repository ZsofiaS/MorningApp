import React from 'react';
import Navigator from './src/Navigator';
import { View, StyleSheet } from 'react-native';
import colours from './constants/colours.js';
import Header from './src/components/Header';

export default function App() {
  return (
    <>
    <Header />
    <Navigator />
    </>
  );
}

