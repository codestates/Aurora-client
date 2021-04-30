import { applyMiddleware, createStore, compose } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducer from '../reducers'

const configureStore = (context) => {
  console.log(context)
  const middlewares = [thunk]
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  const store = createStore(reducer, enhancer)
  return store
}

const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' })

export default wrapper
