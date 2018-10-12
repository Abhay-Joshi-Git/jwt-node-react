import axios from 'axios';

export const login = ({ userName, password }) => {
	return axios.post('/login', {
		userName,
		password
	}).then(response => response.data);
}
