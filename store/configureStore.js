import { createStore } from 'redux'
import rootReducer from '../reducers'

const _initialState = {
  planets: [
    {x: 100, y: 100, id: 0, name: 'Bad Planet'},
    {x: 375, y: 220, id: 1, name: 'Good Planet One'},
    {x: 600, y: 360, id: 2, name: 'Good Planet Two'},
  ],
}

// different variable name required
export default function configureStore(initialState = _initialState) {
  const store = createStore(rootReducer, initialState)

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
