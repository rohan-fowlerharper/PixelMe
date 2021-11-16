const initialState = '#FFFFFF'

function selectedColor (state = initialState, action) {
  switch (action.type) {
    case 'SET_COLOR':
      // TODO {color} : color (hex)
      return state
    default:
      return state
  }
}
