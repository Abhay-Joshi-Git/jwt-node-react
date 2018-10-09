import axios from 'axios';

export const getFeeds = async () => {
	const response = await axios.get('/feeds');
	// console.log('feeds response', response);
	return response.data;
}