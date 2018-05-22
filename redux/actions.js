export const UPDATE_FEED = 'UPDATE_FEED'
export const FETCH_FEED = 'FETCH_FEED'

// action creators
export const updateFeedContent = update => ({
  type: UPDATE_FEED,
  payload: update,
})

export const fetchFeedAction = params => ({
  type: FETCH_FEED,
  payload: params,
})
