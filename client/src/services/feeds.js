import axios from 'axios';
import { delay } from 'services/utils'

export const getFeeds = async () => {
	await delay(1500)
	const response = await axios.get('/feeds');
	return response.data;
}