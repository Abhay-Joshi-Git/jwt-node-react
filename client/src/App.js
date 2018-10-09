import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from 'widgets/layout/Layout';

export default () => (
	<div className="text-center">
		<Router>
			<Layout />
		</Router>
	</div>
)
