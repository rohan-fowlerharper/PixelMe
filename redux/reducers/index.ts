import { combineReducers } from '@reduxjs/toolkit'

import board from './boardSlice'
import selectedColor from './selectedColorSlice'
import showTemplate from './showTemplate'

const rootReducer = combineReducers({
  board,
  selectedColor,
  showTemplate,
})

export default rootReducer
