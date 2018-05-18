const articleReducer = function(state={
  article: null,
  fetching: false,
  fetched: false,
  error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_USER": {
        return {...state, fetching: true}
      }
      case "FETCH_ARTICLE_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_ARTICLE_FULFILLED": {
        return {...state,
          fetching: false,
          fetched: true,
          article: action.payload,
        }
      }
    }

    return state

}

export default articleReducer
