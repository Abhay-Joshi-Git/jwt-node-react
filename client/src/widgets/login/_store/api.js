import axios from 'axios';
import { delay } from 'services/utils'

export const login = async ({ userName, password }) => {
	await delay(2000)
	const response = await axios.post('/login', { userName, password })
	return response.data;
}
