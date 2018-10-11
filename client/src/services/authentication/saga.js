import { call, put, take, fork, all, takeLatest } from 'redux-saga/effects';
import { login } from './api'
import { SET_AUTHENTICATION_STATE, DO_LOGIN } from './types'
import { setToken, removeToken } from 'services/token'
import { setAuthentication } from './actions'
import { push } from 'react-router-redux';

function* doLogin (action) {
	const response = yield call(login, action.payload)
	setToken(response.token)
	yield put(setAuthentication, true)
}

function* takeLogin() {
	yield takeLatest(DO_LOGIN, doLogin)
}

function* handleAuthStateSet(action) {
	if (action.payload) {
		yield put(push('/'));
	} else {
		removeToken();
		yield put(push('/login'));
	}
}

function* takeAuthStateSet() {
	while (true) {
		const action = yield take(SET_AUTHENTICATION_STATE)
		yield handleAuthStateSet(action)
	}
}

export default function* root() {
  yield all([fork(takeLogin), fork(takeAuthStateSet)])
}
