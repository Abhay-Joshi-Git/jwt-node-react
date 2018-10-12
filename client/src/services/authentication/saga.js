import { put, take } from 'redux-saga/effects';
import { SET_AUTHENTICATION_STATE } from './types'
import { removeToken } from 'services/token'
import { push } from 'react-router-redux';

function* handleAuthStateSet(action) {
	if (action.payload) {
		yield put(push('/'));
	} else {
		removeToken();
		yield put(push('/login'));
	}
}

export function* takeAuthStateSet() {
	while (true) {
		const action = yield take(SET_AUTHENTICATION_STATE)
		yield handleAuthStateSet(action)
	}
}
