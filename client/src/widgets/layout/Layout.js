import React from 'react';
import Toolbar from './Toolbar';
import Content from './Content';
import { Container } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { configureInterceptor } from 'services/interceptor';

class Layout extends React.Component {
	componentDidMount() {
		configureInterceptor(this.props.history)
	}

	render() {
		return (
			<Container className="full-height">
				<Toolbar />
				<Content />
			</Container>
		);		
	}

}


export default withRouter(Layout);