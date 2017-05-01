import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ArtistBox from './ArtistBox';

export default class testReactNative extends Component {

  render() {
    const artist = {
      image: 'https://buzz.ie/wp-content/uploads/2016/12/chris-martin-israel.jpg',
      name: 'Chris Martin',
      likes: 200,
      comments: 140
    }

    return (
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
        <ArtistBox artist={artist} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 50,
  },
});

AppRegistry.registerComponent('testReactNative', () => testReactNative);
