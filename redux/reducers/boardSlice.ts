import { hexToGrayscale } from '../../util'
import { createSlice, createAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// TODO: use HSL strings as it's easier to conver to grayscale
// type HSLString = `hsl(${number}, ${number}%, ${number}%)`
export type HexString = `#${string}`

type row = number
type col = number
type Pixel = {
  row: row
  col: col
  color: HexString | null
  baseColor: HexString
}

export const draw = ({
  row,
  col,
  color,
}: Pick<Pixel, 'row' | 'col' | 'color'>) => {
  return {
    type: 'board/setPixelColor',
    payload: { row, col, color },
  } as PayloadAction<Pick<Pixel, 'row' | 'col' | 'color'>>
}

export const clear = ({ row, col }: Pick<Pixel, 'row' | 'col'>) => {
  return {
    type: 'board/setPixelColor',
    payload: { row, col, color: null },
  } as PayloadAction<Pick<Pixel, 'row' | 'col' | 'color'>>
}

const boardSlice = createSlice({
  name: 'board',
  initialState: [] as Array<Array<Pixel>>,
  reducers: {
    setPixelColor: (
      state,
      {
        payload: { row, col, color },
      }: PayloadAction<Pick<Pixel, 'row' | 'col' | 'color'>>
    ) => {
      state[row][col].color = color
    },
    createEmptyBoard: (
      state,
      {
        payload: { height, width },
      }: PayloadAction<{ height: number; width: number }>
    ) => {
      console.log('hello')
      return Array.from({ length: height }, (_, row) =>
        Array.from(
          { length: width },
          (_, col) =>
            ({
              row,
              col,
              color: null,
              baseColor: '#FFFFFF',
            } as Pixel)
        )
      )
    },
    createBoardFromTemplate: (
      state,
      {
        payload: {
          template: { art, pallete },
        },
      }: PayloadAction<{ template: Template }>
    ) => {
      return art.map((row, rowIdx) => {
        return row.split('').map(
          (colorSymbol, colIdx) =>
            ({
              color: null,
              baseColor: hexToGrayscale(pallete[colorSymbol]),
              col: colIdx,
              row: rowIdx,
            } as Pixel)
        )
      })
    },
  },
})

type Template = {
  art: Array<string>
  pallete: { [key: string]: HexString }
}

export const { setPixelColor, createEmptyBoard, createBoardFromTemplate } =
  boardSlice.actions

export default boardSlice.reducer
