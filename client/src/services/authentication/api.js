import axios from 'axios'
import { delay } from 'services/utils'

export const checkLogin = async () => {
	await delay()
	try {
		await axios.get('/isloggedin');
		return {
			isLoggedIn: true
		}
	} catch (e) {
		return {
			isLoggedIn: false
		}
	}
}