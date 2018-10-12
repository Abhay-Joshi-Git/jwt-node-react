import { call, put, takeLatest } from 'redux-saga/effects';
import { login } from './api'
import { DO_LOGIN } from './types'
import { setToken } from 'services/token'
import { setAuthentication } from 'services/authentication/actions'
import { push } from 'react-router-redux';

function* doLogin (action) {
	const response = yield call(login, action.payload)
	setToken(response.token)
	yield put(setAuthentication(true))
	yield put(push(action.payload.redirect || '/'));
}

export function* takeLogin() {
	yield takeLatest(DO_LOGIN, doLogin)
}
