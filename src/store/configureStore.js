import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (initialState) => {
  const logger = createLogger();
  const middlewares = [ thunk, logger ];
  const store = createStore(rootReducer, initialState, composeWithDevTools(
  applyMiddleware(...middlewares)));

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers')
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore;