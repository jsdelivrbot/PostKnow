/**
*
* @summary:  Application actions
*
*/
import { Router, RouterContext, browserHistory } from 'react-router';
import axios from 'axios';

//Backend config
import { SERVER_PATH } from '../../../privateConfig';
import { GOOG_BASE } from '../../../conf';

//Application enums
import { BP } from '../consts/styles.base';

// Action enums
import {
	WINDOW_RESIZE,
	POSTCODE_UPDATE,
	POSTCODE_FAIL,
	CLEAR_DIALOG,
	UPDATE_STATS_CONTAINER,
	SHOW_LOADING
} from './types';

/**
*
* @API CALLS
*
*/

//Query API for 12 months of data based on users
//provided location
export const queryAPI = coordinates => dispatchEvent => {
	dispatchEvent({
		type: SHOW_LOADING
	});
	const params = { params: { ...coordinates } };
	axios
		.get('/checkarea', params)
		.then(response => {
			console.log(response);
			dispatchEvent({
				type: UPDATE_STATS_CONTAINER,
				payload: response.data.message
			});
			browserHistory.push('/overview');
		})
		.catch(error => {
			console.log('error received');
			console.log(error);
		});
};

//Query server to check and return full address of <-- Processed in component
//remove and add to the store.
export const checkPostcode = postcode => dispatchEvent => {
	const params = { params: { postcode } };
	return axios
		.get('/checkpostcode', params)
		.then(response => {
			if (!response.data.error) {
				const results = response.data.location.results;
				const address = results[0].formatted_address;
				const coords = results[0].geometry.location;
				dispatchEvent({
					type: POSTCODE_UPDATE,
					payload: [address, coords]
				});
			} else {
				dispatchEvent({
					type: POSTCODE_FAIL,
					payload: 'Unknown address'
				});
			}
		})
		.catch(error => {
			dispatchEvent({
				type: POSTCODE_FAIL,
				payload: error
			});
		});
}; //end of dispatch return

/**
*
* @UI CALLS
*
*/

export const handleWindowResize = size => ({
	type: WINDOW_RESIZE,
	payload: size
});

//Clear dialog state after message has been shown
export function clearDialog() {
	return {
		type: CLEAR_DIALOG
	};
}
