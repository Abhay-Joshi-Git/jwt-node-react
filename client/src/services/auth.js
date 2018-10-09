import axios from 'axios';

export const login = async (userName, password) => {
	const response = await axios.post('/login', {
		userName,
		password
	})
	// console.log('login response', response)
	setToken(response.data.token)
}

export const setToken = (token) => {
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	localStorage.setItem('jwt-feeds-token', token);
}

export const getToken = (token) => {
	return localStorage.getItem('jwt-feeds-token');
}