/**
*
* @summary:  Application actions
*
*
*/

//Backend config
import { SERVER_PATH } from '../../../privateConfig';

// Action enums
import { GET_DATA, GET_MESSAGE } from './types';

//Query API for 12 months of data based on users
//provided location
export const queryAPI = (coordinates) => {

	return (dispatchEvent) => {

		console.log(coordinates);

		dispatchEvent({
			type: GET_MESSAGE,
			payload: coordinates
		})

	}

}

//Query server to check and return full address of <-- Possibly do this in component
//coordinates to confirm correct location.
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
