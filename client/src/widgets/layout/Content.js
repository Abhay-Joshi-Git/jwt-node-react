import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Feeds from 'widgets/feeds/Feeds';
import Login from 'widgets/login/Login';
import withAuthCheck from 'components/withAuthorizationCheck'

const Content = () => (
	<div className="h-100">
		<Switch>
			<Route exact path="/" component={withAuthCheck(Feeds)} />
			<Route path="/login" component={Login} />
		</Switch>
	</div>
)

export default Content;