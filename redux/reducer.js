import {combineReducers} from 'redux'
import {UPDATE_FEED, FETCH_ERR, CLEAN_ERR, FETCH_FEED} from './Actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const feedReducer = (state = {content: []}, action) => {
  switch(action.type) {
    case FETCH_FEED:
      return merge(state, {loading: true});
    case UPDATE_FEED:
      return merge(
        state,
        {content: state.content.concat(action.payload), loading: false}
      );
    case FETCH_ERR:
      return merge(state, {error: action.payload, loading: false});
    case CLEAN_ERR:
      return merge(state, {error: null});
    default:
      return state
  }
}

const reducer = combineReducers({
  feed: feedReducer,
})

export default reducer
