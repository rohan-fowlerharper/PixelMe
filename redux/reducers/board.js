import { hexToGrayscale } from "../../util"
const initialState = []
// TODO: update this to use row and col idx instead of id
// Question: will this make it more efficient if I have to return a non-mutated state anyway?

function board (state = initialState, action) {
  switch (action.type) {
    case 'SET_PIXEL_COLOR':
      return state.map((row, rowIdx) => {
        if (action.row !== rowIdx) return row
        return row.map((pixel, colIdx) => {
          if (action.col !== colIdx) return pixel
          return {
            ...pixel,
            color: action.color
          }
        })
      })
    case 'CREATE_EMPTY_BOARD':
      return Array(action.height).fill().map((_, rowIdx) => {
        return Array(action.width).fill().map((_, colIdx) => {
          return {
            id: `${rowIdx}-${colIdx}`,
            color: action.initialColor,
            baseColor: '#FFFFFF',
            row: rowIdx,
            col: colIdx
          }
        })
      })
    case 'CREATE_BOARD_FROM_TEMPLATE':
      return action.template.art.map((row, rowIdx) => {
        return row.split('').map((colorSymbol, colIdx) => {
          const baseColor = hexToGrayscale(action.template.pallete[colorSymbol])
          return {
            id: `${rowIdx}-${colIdx}`,
            color: null,
            baseColor,
            col: colIdx,
            row: rowIdx
          }
        })
      })
    default:
      return state
  }
}

export default board


