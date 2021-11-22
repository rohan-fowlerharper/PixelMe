const emptyUser = {
  id: null,
  name: null,
  email: null,
  avatar: null,
  isAdmin: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
}

const user = (state = emptyUser, action) => {
  switch (action.type) {
    case 'USER_LOGIN_REQUEST':
      return {
        ...state,
        isLoading: true,
        error: null,
      }
    case 'USER_LOGIN_SUCCESS':
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        id: action.user.id,
        name: action.user.name,
        email: action.user.email,
        avatar: action.user.avatar,
        isAdmin: action.user.isAdmin,
      }
    case 'USER_LOGIN_FAILURE':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case 'USER_LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        id: null,
        name: null,
        email: null,
        avatar: null,
        isAdmin: false,
      }
    default:
      return state
  }
}