import { createStore, compose, applyMiddleware } from 'redux'
import reducer from './reducers/index'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import saga from './saga'

const sagaMiddleware = createSagaMiddleware()

const composeSetup = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export default createStore(
  reducer,
  composeSetup(),
  applyMiddleware(sagaMiddleware, logger)
)

sagaMiddleware.run(saga)