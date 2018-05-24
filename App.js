import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './redux/Store'
import FeedScreen from './screens/FeedScreen'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <FeedScreen />
      </Provider>
    );
  }
}
