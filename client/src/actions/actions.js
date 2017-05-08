/**
*
* @summary:  Application actions
*
*/

import axios from 'axios';

//Backend config
import { SERVER_PATH } from '../../../privateConfig';
import { GOOG_BASE } from '../../../conf';

// Action enums
import { POSTCODE_UPDATE, POSTCODE_FAIL, CLEAR_DIALOG } from './types';

//-----------------------------------------------------------------------------

//Query API for 12 months of data based on users
//provided location
export const queryAPI = (coordinates) => {

	return (dispatchEvent) => {

		const params = { params: { ...coordinates } }
		console.log(params);

		axios.get('/checkarea', params)
		     .then((response) => {
					 console.log('response received');
					 console.log(response);
				 })
				 .catch((error) => {
					 console.log('error received');
					 console.log(error);
				 })

		/*
		dispatchEvent({
			type: GET_DATA,
			payload: coordinates
		}) */

	}

}

//Query server to check and return full address of <-- Processed in component
//remove and add to the store.
export const checkPostcode = (postcode) => {

	return (dispatchEvent) => {

		const params = { params: { postcode } };
		return axios.get('/checkpostcode', params )
		    .then((response) => {
					if(!response.data.error){
						const results = response.data.location.results;
						const address = results[0].formatted_address;
						const coords = results[0].geometry.location;
						dispatchEvent({
							type: POSTCODE_UPDATE,
							payload: [address, coords]
						});
					}else{
						dispatchEvent({
							type: POSTCODE_FAIL,
							payload: "Unknown address"
						})
					}
				}).catch((error) => {
					dispatchEvent({
						type: POSTCODE_FAIL,
						payload: error
					})
				})

	}//end of dispatch return

}

//Clear dialog state after message has been shown
export function clearDialog(){
	return {
		type: CLEAR_DIALOG
	}
}
