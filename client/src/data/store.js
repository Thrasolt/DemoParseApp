import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'


import reducer from './reducers/reducer'

const middleware = applyMiddleware(thunk, logger, promise())

const store = createStore(reducer, middleware)

export default store
