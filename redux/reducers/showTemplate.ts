import { createSlice } from '@reduxjs/toolkit'

export const showTemplateSlice = createSlice({
  name: 'showTemplate',
  initialState: true,
  reducers: {
    toggleTemplate: (state) => !state,
  },
})

export default showTemplateSlice.reducer

export const { toggleTemplate } = showTemplateSlice.actions
