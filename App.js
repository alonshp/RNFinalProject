import React from 'react';
import {fetchFeed} from './api'
import { StyleSheet, Text, View} from 'react-native';
import FlatListFeed from './flatListFeed'
import { Constants } from 'expo';


export default class App extends React.Component {
  state = {
    feed: null
  }

  componentDidMount() {
    this.getPosts()
  }

  getPosts = async () => {
    const results = await fetchFeed()
    console.log(results)
    this.setState({feed: results})
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.feed && (
          <FlatListFeed
            feed={this.state.feed}
            />
          )}
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
    paddingTop: Constants.statusBarHeight,
  },
});
