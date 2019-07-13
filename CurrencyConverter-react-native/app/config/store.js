import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import { composeWithDevTools } from 'redux-devtools-extension';

import reducers from '../reducers';

const middleware = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

// export default createStore(reducers, composeWithDevTools(applyMiddleware(...middleware)));
export default createStore(reducers, applyMiddleware(...middleware));
