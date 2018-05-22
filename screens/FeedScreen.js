import React from 'react';
import { StyleSheet, View} from 'react-native';
import FlatListFeed from '../flatListFeed';
import {Constants} from 'expo';
import {connect} from 'react-redux'
import {fetchFeedAction} from '../redux/actions'

class FeedScreen extends React.Component {
  componentDidMount() {
    this.props.fetchFeedAction()
  }

  render() {
    console.log("inside feedscreen");
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

export default connect(mapStateToProps, {fetchFeedAction: fetchFeedAction})(FeedScreen)
