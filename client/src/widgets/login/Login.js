import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import './Login.css';
import LoadingIndicator from 'components/loadingIndicator/LoadingIndicator';
import { login } from 'services/authentication/api';
import { setAuthentication } from 'services/authentication/actions'
import { connect } from 'react-redux'
import { setToken } from 'services/token';
class Login extends Component {
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onSubmit(this.state.username, this.state.password)
	}

	render() {
		return (
			<div className="h-100">
				<h1>Login</h1>
				<div className="h-100 d-flex justify-content-center">
					<Form className="form-container">
						<Input
							className="form-item my-2"
							placeholder="Username"
							name="username"
							type="text"
							onChange={this.handleChange}
						/>
						<Input
							className="form-item my-2"
							placeholder="Password"
							name="password"
							type="password"
							onChange={this.handleChange}
						/>
						<div className="my-2 d-flex justify-content-end">
							<Button color="primary" onClick={this.handleSubmit}>Submit</Button>
						</div>
					</Form>
				</div>
			</div>
		);
	}
}

class LoginContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginInProgress: false
		}
	}

	doLogin = async (username, password) => {
		this.setState({
			loginInProgress: true
		})
		try {
			const response = await login({ username, password })
			setToken(response.token)
			this.props.setAuthentication(true);
			const { history } = this.props
			history.push('/');
		} catch (e) {
			this.setState({
				loginInProgress: false
			})
		}
	}

	render() {
		return (
			<div className="position-relative">
				{this.state.loginInProgress && <LoadingIndicator className="loading-container" />}
				<Login onSubmit={this.doLogin} />			
			</div>
		)
	}
}

export default connect(null, { setAuthentication })(LoginContainer);