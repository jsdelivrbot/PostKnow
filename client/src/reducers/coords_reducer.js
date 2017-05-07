/**
*
* @summary:  Update coordinate state and failure state for postcode verification
*            and geocoding.
*
*/

import { POSTCODE_FAIL, POSTCODE_UPDATE, CLEAR_DIALOG } from '../actions/types';

const INIT_STATE = {
	coords: {},
	address: 'Area not given',
	isNotAFail: true,
	failureMessage: false
}

export default function(state=INIT_STATE, action){

	switch(action.type)
	{
		case POSTCODE_UPDATE:
			const [address,coords] = action.payload;
			return { ...state, address, coords};
			break;
		case POSTCODE_FAIL:
			return {...state, isNotAFail: false, message: action.payload};
			break;
		case CLEAR_DIALOG:
				return {...state, isNotAFail: true};
				break;
	}

	return state;

}
