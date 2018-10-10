import React from 'react';
import Toolbar from './Toolbar';
import Content from './Content';
import { Container } from 'reactstrap';

const Layout = () => (
	<Container className="full-height text-center">
		<Toolbar />
		<Content />
	</Container>
);		

export default Layout;