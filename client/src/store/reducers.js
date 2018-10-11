import auth from 'services/authentication/reducer'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'; 

export default combineReducers({
	auth,
	routing: routerReducer
})
