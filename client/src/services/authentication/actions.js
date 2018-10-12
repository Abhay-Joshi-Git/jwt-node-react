import { SET_AUTHENTICATION_STATE } from './types'

export const setAuthentication = (status) => ({
	type: SET_AUTHENTICATION_STATE,
	payload: status
});