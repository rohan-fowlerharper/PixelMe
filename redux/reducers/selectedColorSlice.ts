import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import { type HexString } from '../../utils/colors'

export const colorSlice = createSlice({
  name: 'selectedColor',
  initialState: '#000000' as HexString,
  reducers: {
    setSelectedColor: (_, action: PayloadAction<HexString>) => action.payload,
  },
})

export const { setSelectedColor } = colorSlice.actions
export default colorSlice.reducer
