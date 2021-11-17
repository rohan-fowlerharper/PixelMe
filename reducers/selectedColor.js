const initialState = '#FFFFFF'

function selectedColor (state = initialState, action) {
  switch (action.type) {
    case 'SET_COLOR':
      return action.color
    default:
      return state
  }
}

export default selectedColor
