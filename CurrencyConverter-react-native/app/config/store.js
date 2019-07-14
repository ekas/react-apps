import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
// import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const store = createStore(reducers, applyMiddleware(...middleware));
sagaMiddleware.run(rootSaga);
// export default createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));
export default store;
