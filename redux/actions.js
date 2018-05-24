export const UPDATE_FEED = 'UPDATE_FEED'
export const FETCH_FEED = 'FETCH_FEED'
export const FETCH_ERR = 'FETCH_ERR'
export const CLEAN_ERR = 'CLEAN_ERR'

// action creators
export const updateFeedContent = update => ({
  type: UPDATE_FEED,
  payload: update,
})

export const fetchFeedAction = params => ({
  type: FETCH_FEED,
  payload: params,
})

export const fetchErrorAction = err => ({
  type: FETCH_ERR,
  payload: err,
})

export const cleanErrorAction = err => ({
  type: CLEAN_ERR,
})
