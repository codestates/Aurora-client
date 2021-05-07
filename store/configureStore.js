import thunk from 'redux-thunk'
import { applyMiddleware, createStore, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from '../reducers'

const configureStore = (context) => {
  const middlewares = [thunk]
  const enhancer = process.env.NODE_ENV === 'production'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  const store = createStore(reducer, enhancer)
  return store
}

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' })

export default wrapper
