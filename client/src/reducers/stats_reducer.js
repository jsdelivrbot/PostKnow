/**
*
*/

import {
	GET_DATA,
	GET_MESSAGE,
	UPDATE_STATS_CONTAINER
} from '../actions/types';

const INIT_STATE = {
	monthlyOverall: {},
	solvedOverall: {},
	byStreetOverall: {},
	userStreetOverall: []
};

export default function (state = INIT_STATE, action) {
	switch (action.type) {
		case GET_MESSAGE:
			return { ...state, data: action.payload };
		case GET_DATA:
			return { ...state, data: action.payload };
		case UPDATE_STATS_CONTAINER:
			return {
				...state,
				monthlyOverall: action.payload.allStreetsMonthly,
				solvedOverall: action.payload.allStreetsSolved,
				byStreetOverall: action.payload.allStreetsbyFigures,
				userStreetOverall: action.payload.userStreetCrimes
			};
	}
	return state;
}

//const mapToArray = obj =>
