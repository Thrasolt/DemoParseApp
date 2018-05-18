import { combineReducers} from 'redux'
import articleReducer from './articleReducer.js'
import articleListReducer from './articleListReducer.js'

const reducer = combineReducers({

	article: articleReducer,
	articleList: articleListReducer,


})

export default reducer
