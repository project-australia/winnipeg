import { combineReducers } from 'redux'

import { authReducerConfig } from './authentication'
import { createReducer } from './functionalReducer'
import { shoppingBagReducerConfig } from './shoppingBag'
import { bookReducerConfig } from './book'

export const reducers = {
  authentication: createReducer(authReducerConfig),
  shoppingBag: createReducer(shoppingBagReducerConfig),
  books: createReducer(bookReducerConfig)
}

export const rootReducer = combineReducers(reducers)
