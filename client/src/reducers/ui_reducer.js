/**
*
* @summary: Hold application UI state
*
*/

import {
	WINDOW_RESIZE,
	UPDATE_STATS_CONTAINER,
	SHOW_LOADING
} from '../actions/types';
import { BP } from '../consts/styles.base';
import { currentWindowWidth } from '../libs/domUtils';

const INIT_STATE = {
	mobileLayout: currentWindowWidth() > BP.MOBILE,
	sidebar: false,
	isLoading: false
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case WINDOW_RESIZE:
			return { ...state, mobileLayout: action.payload > BP.MOBILE };
		case UPDATE_STATS_CONTAINER:
			return { ...state, sidebar: true };
		case SHOW_LOADING:
			return { ...state, isLoading: true };
		default:
			return state;
	}
};
