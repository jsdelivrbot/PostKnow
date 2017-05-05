/**
*
* @summary:  Application actions
*
*/

//Backend config
import { SERVER_PATH } from '../../../privateConfig';

// Action enums
import { GET_DATA, GET_MESSAGE } from './types';

//-----------------------------------------------------------------------------

//Query API for 12 months of data based on users
//provided location
export const queryAPI = (coordinates) => {

	return (dispatchEvent) => {

		const params = { params: { ...coordinates } }

		/*
		axios.get('/checkarea', param)
		     .then((response) => {

				 })
				 .catch((error) => {

				 })*/

		/*
		dispatchEvent({
			type: GET_DATA,
			payload: coordinates
		}) */

	}

}

//Query server to check and return full address of <-- Processed in component
//remove and add to the store.
export const checkPostcode = (coordinates) => {

	return (dispatchEvent) => {

		console.log('coordinates are' + coordinates);
		const param = { params: { coordinates } };

		axios.get('/checkpostcode', param)
		     .then((response) => {
					 console.log(response);
				 })
				 .catch((error) => console.log(error));

	}

}
