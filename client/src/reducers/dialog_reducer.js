/**
*
* @summary: Contain message state for all components to register to
*
*/

import { POSTCODE_FAIL, POSTCODE_UPDATE, CLEAR_DIALOG } from '../actions/types';

const INIT_STATE = {
	showMessage: false
};

//<-- Fix issue with combining UPDATE and FAIL in the same switch expression

export default function (state = INIT_STATE, action) {
	switch (action.type) {
		case POSTCODE_UPDATE:
			return { ...state, showMessage: true };
		case POSTCODE_FAIL:
			return { ...state, showMessage: true };
		case CLEAR_DIALOG:
			return { ...state, showMessage: false };
		default:
			return state;
	}
}
