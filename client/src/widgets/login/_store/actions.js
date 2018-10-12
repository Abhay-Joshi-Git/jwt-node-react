import { DO_LOGIN } from './types'

export const login = (userName, password, redirect) => ({
	type: DO_LOGIN,
	payload: {
		userName,
		password,
		redirect
	}
});