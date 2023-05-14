import { hexToGrayscale } from '../../utils/colors'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { HexString } from '../../utils/colors'
import { Template } from '../../types/template'

type row = number
type col = number
type Pixel = {
  row: row
  col: col
  color: HexString | null
  baseColor: HexString
}
type Coord = Pick<Pixel, 'row' | 'col'>
type BasePixel = Omit<Pixel, 'baseColor'>

export const draw = ({
  row,
  col,
  color,
}: BasePixel): PayloadAction<BasePixel> => {
  return {
    type: 'board/setPixelColor',
    payload: { row, col, color },
  }
}

export const clear = ({ row, col }: Coord): PayloadAction<BasePixel> => {
  return {
    type: 'board/setPixelColor',
    payload: { row, col, color: null },
  }
}

const boardSlice = createSlice({
  name: 'board',
  initialState: [] as Array<Array<Pixel>>,
  reducers: {
    setPixelColor: (
      state,
      { payload: { row, col, color } }: PayloadAction<BasePixel>
    ) => {
      state[row][col].color = color
    },
    createEmptyBoard: (
      _state,
      {
        payload: { height, width },
      }: PayloadAction<{ height: number; width: number }>
    ) => {
      return Array.from({ length: height }, (_, row) =>
        Array.from({ length: width }, (_, col) => ({
          row,
          col,
          color: null,
          baseColor: '#FFFFFF',
        }))
      )
    },
    createBoardFromTemplate: (
      _state,
      {
        payload: {
          template: { art, pallete },
        },
      }: PayloadAction<{ template: Template }>
    ) => {
      return art.map((row, rowIdx) => {
        return row.split('').map((colorSymbol, colIdx) => ({
          color: null,
          baseColor: hexToGrayscale(pallete[colorSymbol]),
          col: colIdx,
          row: rowIdx,
        }))
      })
    },
  },
})

export const { setPixelColor, createEmptyBoard, createBoardFromTemplate } =
  boardSlice.actions

export default boardSlice.reducer
