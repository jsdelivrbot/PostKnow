import { GET_DATA, GET_MESSAGE } from '../actions/types';

export default function(state={}, action)
{
	switch(action.type)
	{
		case GET_MESSAGE:
			return {...state, message: action.payload}	
	}
	return state;
}