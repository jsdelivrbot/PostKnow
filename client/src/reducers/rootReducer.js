/***********************************************
 *  @summary : Combine all independent reducers 
 *             in single reducer
 *
 **********************************************/

import { combineReducers } from 'redux';
import stats_reducer from './stats_reducer';

const rootReducer = combineReducers({
  stats: stats_reducer
});

export default rootReducer;
