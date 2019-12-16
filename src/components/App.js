import React, { Component } from 'react';
import NavLink from './NavLink'
import Button from '@material-ui/core/Button';

export default class App extends Component {

  render() {
   return (
     <div >
       <div style={{ marginLeft: '84%',}}>
         <Button size="small" variant="contained" ><NavLink onlyActiveOnIndex={true} to='/'>Главная</NavLink></Button>
         <Button size="small" variant="contained" style={{ marginLeft: '3%',}}><NavLink  to='/map'>Карта</NavLink></Button>
         <Button size="small" variant="contained" style={{ marginLeft: '3%',}}><NavLink to='/login'>Войти</NavLink></Button>
       </div>
       {this.props.children}
     </div>
   )
 }
}
