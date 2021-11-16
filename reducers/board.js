const initialState = []

function board (state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_PIXEL_COLOR':
      // TODO {pixelId, previousColor, newColor} - previous color for undo? : [Array<Pixel>]
      return state
    case 'CREATE_EMPTY_BOARD':
      // TODO {width, height, initial color} : []
      return state
    case 'CREATE_BOARD_FROM_TEMPLATE':
      // TODO {existingBoard, width, height}
    default:
      return state
  }
}
