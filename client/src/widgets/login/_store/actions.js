import { DO_LOGIN } from './types'

export const login = (userName, password) => ({
	type: DO_LOGIN,
	payload: {
		userName,
		password
	}
});