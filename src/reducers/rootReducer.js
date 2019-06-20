import { combineReducers } from 'redux'
import app from './app'

export const createReducer = asyncReducers => {
  return combineReducers({
    app,
    ...asyncReducers
  })
}

// https://stackoverflow.com/questions/32968016/how-to-dynamically-load-reducers-for-code-splitting-in-a-redux-application
