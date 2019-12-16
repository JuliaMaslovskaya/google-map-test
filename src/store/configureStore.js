import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { logger } from 'redux-logger'
import { rootReducer } from '../reducers'
import { redirect } from '../middlewares/redirect'

export default () => {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    applyMiddleware(logger),
    applyMiddleware(redirect)
  )(createStore)(rootReducer)


  return store
}
