
export const delay = (ms = 1000) => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(true)
		}, ms);	
	})
}