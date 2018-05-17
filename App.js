import React from 'react';
import {fetchFeed} from './api'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const results = await fetchFeed()
    console.log(results)
  }

  render() {
    return (
      <View style={styles.container}>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
