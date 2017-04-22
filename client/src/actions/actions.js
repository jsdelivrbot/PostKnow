//Backend config
import { SERVER_PATH } from '../../../privateConfig';

// Action enums
import { GET_DATA, GET_MESSAGE } from './types';

// Query API for data based on user provided
// coordinates
export const queryAPI = (coordinates) => {

	return (dispatchEvent) => {

		console.log(coordinates);

		
		fetch(SERVER_PATH, {
			method: 'post',
			body: JSON.stringify({ coordinates })
		})
		.then((response) => {
			console.log(response);
		}).catch((err) => {
			console.log(err);
		});
		
		
		dispatchEvent({
			type: GET_MESSAGE,
			payload: coordinates
		})
		

	}

}