const initialState = false

const showTemplate = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_TEMPLATE':
      return !state
    default:
      return state
  }
}

export default showTemplate