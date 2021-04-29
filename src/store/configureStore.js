import { createWrapper } from 'next-redux-wrapper'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  console.log(action)
  return next(action)
}

const configureStore = () => {
  const middlewares = [thunk, loggerMiddleware]
  const store = createStore(reducers, applyMiddleware(...middlewares))
  return store
}

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development'
})

export default wrapper
