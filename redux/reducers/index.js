// create root reducer and import other reducers
import { combineReducers } from 'redux'

import board from './board'
import selectedColor from './selectedColor'
import showTemplate from './showTemplate'

const rootReducer = combineReducers({
  board,
  selectedColor,
  showTemplate
})

export default rootReducer
