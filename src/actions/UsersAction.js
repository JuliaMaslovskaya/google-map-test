export const login = (payload)=> {
  return (dispatch) => {

    dispatch({
      type: "LOGIN_REQUEST"
    })


      dispatch({
        type: "LOGIN_SUCCESS",
        payload: {
          name: payload.name,
          isAuthenticated: true
        }
      })

      dispatch({
       type: "ROUTING",
       payload: {
         method: 'replace',
         nextUrl: '/map'
        }
      })

  }
}

export const logout=() =>{
  return {
    type: "LOGOUT_SUCCESS"
  }
}
