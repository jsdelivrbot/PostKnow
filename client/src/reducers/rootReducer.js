/**
*
* @summary:  Combine all reducers into single root reducer
*
*
*/

import { combineReducers } from 'redux';
import stats_reducer from './stats_reducer';
//import postcode_reducer from './postcode_reducer';

const rootReducer = combineReducers({
  stats: stats_reducer
});

export default rootReducer;
