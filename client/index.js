/* ========================================
        MAIN REACT INJECTION POINT
===========================================*/

//React modules
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';

// Redux/middleware 
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

//Club together middleware
const middleware = [thunk];

// Reducers
import reducers from './src/reducers/rootReducer';

//Route module
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

//Inject reducers into store
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>, document.getElementById('container'));
