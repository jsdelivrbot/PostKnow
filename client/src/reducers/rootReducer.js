/**
*
* @summary:  Combine all reducers into single root reducer
*
*
*/

import { combineReducers } from 'redux';
import stats_reducer from './stats_reducer';
import coords_reducer from './coords_reducer';
import dialog_reducer from './dialog_reducer';

const rootReducer = combineReducers({
  stats: stats_reducer,
	coords: coords_reducer,
	dialog: dialog_reducer
});

export default rootReducer;


/**
*
* State tree:
*
*           stats   = {}
*           coords  = coords=Array, fail=Boolean, failureMessage=String
*						dialig  = showMessage=Boolean
*
*/
