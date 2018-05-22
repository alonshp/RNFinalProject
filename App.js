import React from 'react';
import {fetchFeed} from './api'
import { StyleSheet, Text, View} from 'react-native';
import FlatListFeed from './flatListFeed';
import { Constants } from 'expo';
import {Provider} from 'react-redux';
import store from './redux/store'
import FeedScreen from './screens/FeedScreen'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <FeedScreen />
      </Provider>
    );
  }
}
