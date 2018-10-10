import { SET_AUTHENTICATION_STATE } from './types'

const initialState = false

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTHENTICATION_STATE:
			return action.payload;
	
		default:
			return state;
	}
}

export default authReducer
