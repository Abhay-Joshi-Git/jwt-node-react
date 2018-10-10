import axios from 'axios'

export const setToken = (token) => {
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	localStorage.setItem('jwt-feeds-token', token);
}

export const removeToken = () => {
	axios.defaults.headers.common['Authorization'] = null;
	localStorage.removeItem('jwt-feeds-token')
}

export const getToken = (token) => {
	return localStorage.getItem('jwt-feeds-token');
}

