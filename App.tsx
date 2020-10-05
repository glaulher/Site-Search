import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/routes';
import Icon from 'react-native-vector-icons/Feather';

Icon.loadFont();

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </>
  );
}
