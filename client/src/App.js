import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'widgets/layout/Layout';
import { Provider } from 'react-redux'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers'

import authSaga from 'services/authentication/saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(authSaga)

export default () => (
	<Provider store={store}>
		<div className="text-center">
			<Router>
				<Layout />
			</Router>
		</div>
	</Provider>
)
