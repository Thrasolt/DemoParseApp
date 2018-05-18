const articleListReducer = function(state={
  articleList: [],
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_ARTICLERLIST": {
        return {...state, fetching: true}
      }
      case "FETCH_ARTICLERLIST_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ARTICLERLIST_FULFILLED": {
        return {...state,
          fetching: false,
          fetched: true,
          articleList: action.payload,
        }
      }
    }

    return state

}

export default articleListReducer
