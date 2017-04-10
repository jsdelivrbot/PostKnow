/**
 *
 *  @summary : Combine all independent reducers in single reducer
 *
 */

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  state: (state={}) => state
});

export default rootReducer;
