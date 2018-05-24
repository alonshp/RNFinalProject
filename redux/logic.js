import { createLogic } from 'redux-logic';
import {fetchFeed} from '../api'
import {fetchErrorAction, updateFeedContent, FETCH_FEED} from './actions'


export const fetchLogic = createLogic({
  type: FETCH_FEED,
  process({ getState, action }, dispatch, done) {
    fetchFeed()
    .then(results => {
      dispatch(updateFeedContent(results))
    })
    .catch(e => {
      dispatch(fetchErrorAction(e.message))
    }).then(() => done())
  }
})

export default [
  fetchLogic,
];
