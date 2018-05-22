import React from 'react';
import {fetchFeed} from '../api'
import { StyleSheet, View} from 'react-native';
import FlatListFeed from '../flatListFeed';
import {Constants} from 'expo';
import {connect} from 'react-redux'
import {updateFeedContent} from '../redux/actions'

class FeedScreen extends React.Component {
  componentDidMount() {
    this.getPosts()
    // TODO dispatch action to get feed
  }

  getPosts = async () => {
    const results = await fetchFeed()
    this.props.updateFeedContent(results)
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.feed !== [] } && (
          <FlatListFeed feed={this.props.feed} />
        )
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
    paddingTop: Constants.statusBarHeight + 20,
  },
});

const mapStateToProps = state => ({
  feed: state.feed,
})

export default connect(mapStateToProps, {updateFeedContent: updateFeedContent})(FeedScreen)
