import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator,Alert} from 'react-native';
import FlatListFeed from '../FlatListFeed';
import {Constants} from 'expo';
import {connect} from 'react-redux'
import {fetchFeedAction, cleanErrorAction} from '../redux/Actions'

const showAlert = (err) => {
    Alert.alert(
       err
    )
}

class FeedScreen extends React.Component {
  componentDidMount() {
    this.props.fetchFeedAction()
  }

  componentWillMount() {
    let errorMsg = this.props.error
    if (errorMsg != null) {
      this.props.cleanErrorAction()
    }
  }

  render() {
    let errorMsg = this.props.error
    return (
      <View style={styles.container}>
        {this.props.feed !== [] } && (
          <FlatListFeed feed={this.props.feed} />
        )
        {this.props.error && showAlert(errorMsg)}
        {this.props.loading && (
            <ActivityIndicator style={styles.spinner} size="large" color="#0000ff" />
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
    paddingTop: Constants.statusBarHeight + 20,
  },
  text: {
    position: 'absolute',
    top: 100
  },
  spinner: {
    position: 'absolute',
    top: 300
  }
});

const mapStateToProps = state => ({
  feed: state.feed.content,
  loading: state.feed.loading,
  error: state.feed.error
})

export default connect(
  mapStateToProps,
  {fetchFeedAction: fetchFeedAction, cleanErrorAction: cleanErrorAction})
  (FeedScreen)
