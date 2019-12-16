const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {}

export default (state = initialState, action)=> {
  switch (action.type) {

    case "LOGIN_REQUEST":
      return state

    case "LOGIN_SUCCESS":
      return {
        ...state,
        name: action.payload.name,
        isAuthenticated: action.payload.isAuthenticated}

    case "LOGIN_FAIL":
      return state

    case "LOGOUT_SUCCESS":
      return state

    default:
      return state
    }
}
