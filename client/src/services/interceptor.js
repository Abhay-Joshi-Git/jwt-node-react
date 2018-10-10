import axios from 'axios'
import { getToken } from './auth'

axios.interceptors.request.use((config) => {
	const authToken = getToken()
	console.log(' in axios interceptor --- ', config, authToken)
	let updatedConfig = {...config}
	if (config && config.headers && !config.headers.Authorization && authToken) {
		updatedConfig.headers = {
			...updatedConfig.headers,
			Authorization: 'Bearer ' + authToken
		}
	}
	return updatedConfig;
}, (error) => {
	return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
		window.location = '/login'
	}
})
