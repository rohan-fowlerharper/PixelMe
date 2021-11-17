// create root reducer and import other reducers
import { combineReducers } from 'redux'

import board from './board'
import selectedColor from './selectedColor'

const rootReducer = combineReducers({
  board,
  selectedColor
})

export default rootReducer
