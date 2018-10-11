import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'widgets/layout/Layout';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'store/reducers';

import authSaga from 'services/authentication/saga';
import { configureInterceptor } from 'services/interceptor';

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(authSaga)

configureInterceptor(store)

export default () => (
	<Provider store={store}>
		<div className="text-center">
			<Router>
				<Layout />
			</Router>
		</div>
	</Provider>
)
