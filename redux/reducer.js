import {combineReducers} from 'redux'
import {UPDATE_FEED} from './actions'

const merge = (prev, next) => Object.assign({}, prev, next)

const feedReducer = (state = [], action) => {
  switch(action.type) {
    case UPDATE_FEED:
      return state.concat(action.payload)
    default:
      return state
  }
}

const reducer = combineReducers({
  feed: feedReducer,
})

export default reducer
