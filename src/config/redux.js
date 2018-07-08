import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { applyMiddleware, createStore as create } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { rootReducer } from '../redux/reducers'

const removeNavField = state => {
  const { nav, ...rest } = state
  return rest
}

const logger = createLogger({
  duration: true,
  collapsed: true,
  stateTransformer: removeNavField
})

export const createStore = () => {
  const middleware = [thunk, logger]
  return create(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
}
