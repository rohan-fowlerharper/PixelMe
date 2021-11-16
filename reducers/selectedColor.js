const initialState = '#FFFFFF'

function selectedColor (state = initialState, action) {
  switch (action.type) {
    case 'SET_COLOR':
      console.log('SET_COLOR', action.color)
      return action.color
    default:
      return state
  }
}

export default selectedColor
