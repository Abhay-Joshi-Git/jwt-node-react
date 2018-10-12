import React from 'react';
import { connect } from 'react-redux';
import { checkLogin } from 'services/authentication/api'
import { setAuthentication } from 'services/authentication/actions'
import LoadingIndicator from 'components/loadingIndicator/LoadingIndicator'

class AuthCheck extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			checkingLogin: false
		}
	}

	checkLogin = async () => {
		let response
		this.setState({ checkingLogin: true })
		response = await checkLogin();
		if (response.isLoggedIn) {
			this.setState({ checkingLogin: false })
			this.props.setAuthentication(true)
		}	
	}

	componentDidMount() {
		if (!this.props.auth) {
			this.checkLogin()
		}
	}

	render() {
		return (
			<React.Fragment>
				{this.state.checkingLogin && <div style={{ minHeight: 300, position: 'relative' }}>
					<LoadingIndicator className="loading-container" />
				</div>}
				{this.props.auth && this.props.children}
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	}
};

const AuthCheckWithState = connect(mapStateToProps, { setAuthentication })(AuthCheck);

const withAuthCheck = (WrappedComponent) => () => {
	return (
		<AuthCheckWithState>
			<WrappedComponent />
		</AuthCheckWithState>
	)
};

export default withAuthCheck
