/**
*
* @summary:  Combine all reducers into single root reducer
*
*
*/

import { combineReducers } from 'redux';
import stats_reducer from './stats_reducer';

const rootReducer = combineReducers({
  stats: stats_reducer
	//area: area_reducer
});

export default rootReducer;
