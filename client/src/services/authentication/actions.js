import { DO_LOGIN, SET_AUTHENTICATION_STATE } from './types'

export const login = () => ({
	type: DO_LOGIN
});

export const setAuthentication = (status) => ({
	type: SET_AUTHENTICATION_STATE,
	payload: status
});