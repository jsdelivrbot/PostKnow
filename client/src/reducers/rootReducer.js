/**
*
* @summary:  Combine all reducers into single root reducer
*
*
*/

import { combineReducers } from 'redux';
import statsReducer from './stats_reducer';
import coordsReducer from './coords_reducer';
import dialogReducer from './dialog_reducer';
import uiReducer from './ui_reducer';

const rootReducer = combineReducers({
	stats: statsReducer,
	coords: coordsReducer,
	dialog: dialogReducer,
	ui: uiReducer
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
