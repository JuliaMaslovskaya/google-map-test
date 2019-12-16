import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as UsersAction from '../actions/UsersAction'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export class LoginPage extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.actions.login({name: e.target.elements[0].value})
  }
  render() {
    return (
      < div style={{ width: '100%', display:'flex', justifyContent:'center'}} >
            < form   onSubmit= { this.handleSubmit.bind(this)}>
            <div>
            <TextField required id="standard-required" label="Login" variant="outlined"/>
            </div>
            <div style={{ marginTop:'10px',}}>
            <Button variant="outlined"  type='submit'>войти </Button>
            </div>
          </form>
      </div>
    )
  }
}

const mapStateToProps = ()=> {
  return {}
}

const mapDispatchToProps = ( dispatch)=> {
  return {
 actions: bindActionCreators(UsersAction, dispatch)
  }
}

export  default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
