import axios from "axios"

export function fetchArticleList() {
  return function(dispatch){
    axios.get('http://127.0.0.1:8000/article/')
    .then((response) => {
      dispatch({type: "FETCH_ARTICLERLIST_FULFILLED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "FETCH_ARTICLERLIST_REJECTED", payload: err})
    })
  }
}

export function fetchArticle(slug) {
  return function(dispatch){
    axios.get('http://127.0.0.1:8000/article/'+slug)
    .then((response) => {
      dispatch({type: "FETCH_ARTICLE_FULFILLED", payload: response.data})
    })
    .catch((err) => {
      dispatch({type: "FETCH_ARTICLE_REJECTED", payload: err})
    })
  }
}
