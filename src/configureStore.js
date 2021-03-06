import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer  from './reducers/index';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { redirect } from './middlewares/redirect';

export default function configureStore() {

  const logger = createLogger();

    const store = compose(
        applyMiddleware(thunkMiddleware),
        applyMiddleware(createLogger()),
        applyMiddleware(redirect)
    )(createStore)(rootReducer);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
