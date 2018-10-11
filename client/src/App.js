import React from 'react';
import { Router } from 'react-router-dom';
import Layout from 'widgets/layout/Layout';
import { configureInterceptor } from 'services/interceptor';

import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'store/reducers';
import createHistory from 'history/createBrowserHistory'
import authSaga from 'services/authentication/saga';

const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
	rootReducer,
	applyMiddleware(
		routerMiddleware(history),
		sagaMiddleware
	)
)
sagaMiddleware.run(authSaga)

configureInterceptor(store)

export default () => (
	<Provider store={store}>
		<Router history={history}>
			<Layout />
		</Router>
	</Provider>
)
