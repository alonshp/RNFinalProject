import { createLogic } from 'redux-logic';
import {fetchFeed} from '../api'
import {updateFeedContent, FETCH_FEED} from './actions'


export const fetchLogic = createLogic({
  type: FETCH_FEED,
  // your code here, hook into one or more of these execution
  // phases: validate, transform, and/or process
  process({ getState, action }, dispatch, done) {
    fetchFeed()
    .then(results => dispatch(updateFeedContent(results)))
    .then(() => done());
  }
})

export default [
  fetchLogic,
];
