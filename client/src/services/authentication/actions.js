import { DO_LOGIN, SET_AUTHENTICATION_STATE } from './types'

export const login = (userName, password) => ({
	type: DO_LOGIN,
	payload: {
		userName,
		password
	}
});

export const setAuthentication = (status) => ({
	type: SET_AUTHENTICATION_STATE,
	payload: status
});