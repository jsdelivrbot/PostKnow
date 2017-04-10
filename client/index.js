/* ========================================
        MAIN REACT INJECTION POINT
===========================================*/

//React modules
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route } from 'react-router';

// Redux modules
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';

// Reducers
import reducers from './reducers/rootReducer';

//Route module
import routes from './routes';

//Import Redux
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory}/>
  </Provider>, document.querySelector('.container'));
