import React from 'react'
import { Route} from 'react-router'
import App from './components/App'
import LoginPage from './components/Login'
import requireAuthentication from './components/Auth'
import MyMap from './components/MyMap'
export const routes = (
  <div>
  <Route path='/' component={App}>
<Route path='/Login' component={LoginPage} />
<Route path='/Map' component={requireAuthentication(MyMap)} />
    </Route>

  </div>
)
