/**
*
*/

import { weightedRange } from '~/src/libs/maths';

import {
	GET_DATA,
	GET_MESSAGE,
	UPDATE_STATS_CONTAINER
} from '../actions/types';

const INIT_STATE = {
	monthlyOverall: {},
	solvedOverall: {},
	byStreetOverall: {},
	userStreetOverall: [],
	mapData: {},
	offenceRange: {
		HIGH: 0,
		MED: 0,
		LOW: 0
	}
};

import { filterOutliers } from '~/src/libs/maths';

const crimeSumForStreet = (arr: Array<any>): any => arr.map(x => x[1].crimeSum);

export default function (state = INIT_STATE, action) {
	const { payload } = action;
	switch (action.type) {
		case GET_MESSAGE:
			return { ...state, data: payload };
		case GET_DATA:
			return { ...state, data: payload };
		case UPDATE_STATS_CONTAINER:
			return {
				...state,
				monthlyOverall: payload.allStreetsMonthly,
				solvedOverall: payload.allStreetsSolved,
				byStreetOverall: payload.allStreetsbyFigures,
				userStreetOverall: payload.userStreetCrimes,
				mapData: payload.allStreetsToMap,
				offenceRange: weightedRange(crimeSumForStreet(payload.allStreetsToMap)),
				offenceValues: [
					...new Set(filterOutliers(crimeSumForStreet(payload.allStreetsToMap)))
				]
			};
	}
	return state;
}
