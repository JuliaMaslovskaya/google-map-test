import React from 'react'
import { connect } from 'react-redux'


export default function requireAuthentication(Component) {

  class AuthenticatedComponent extends React.Component {
    UNSAFE_componentWillMount() {
      this.checkAuth(this.props.user)
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
      this.checkAuth(nextProps.user)
    }
    checkAuth(user) {
      if (!user.isAuthenticated) {
        this.props.dispatch({
          type: "ROUTING",
          payload: {
            method: 'replace',
            nextUrl: '/login'
          }
        })
      }
    }
    render() {
      return (
        <div>
          {this.props.user.isAuthenticated === true
            ? <Component {...this.props} />
            : null
          }
        </div>
      )
    }
  }

  const mapStateToProps =(state)=>( {
      user: state.user
    })

  return connect(mapStateToProps)(AuthenticatedComponent)
}
