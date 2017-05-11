import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView';
import LoginView from './LoginView';
import ArtistDetailView from './ArtistDetailView';

class testReactNative extends React.Component {
  render() {

    return <Router>
      <Scene key="login" component={LoginView} hideNavBar />
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar />
        <Scene key="artistDetail" component={ArtistDetailView} title='Comentarios' hideNavBar={false} />
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('testReactNative', () => testReactNative);
