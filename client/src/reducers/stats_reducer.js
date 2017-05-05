import { GET_DATA, GET_MESSAGE } from '../actions/types';

export default function(state={}, action)
{
	switch(action.type)
	{
		case GET_MESSAGE:
			return {...state, data: action.payload};
		case GET_DATA:
			return {...state, data: action.payload};
	}
	return state;
}
