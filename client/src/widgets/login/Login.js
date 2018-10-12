import React, { Component } from 'react';
import { Form, Input, Button, FormGroup } from 'reactstrap';
import './Login.css';
import LoadingIndicator from 'components/loadingIndicator/LoadingIndicator';
import { login as initiateLogin } from './_store/actions'
import { connect } from 'react-redux'

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
				<div className="d-flex justify-content-center">
					<Form className="form-container">
						<FormGroup disabled={this.props.loginInProgress}>
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
						</FormGroup>
						<div className="my-2 d-flex justify-content-end">
							<Button
								color="primary"
								onClick={this.handleSubmit}
								disabled={this.props.loginInProgress}
							>Submit</Button>
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
			this.props.initiateLogin(username, password);
		} catch (e) {
			this.setState({
				loginInProgress: false
			})
		}
	}

	render() {
		return (
			<div className="position-relative">
				{this.state.loginInProgress && <LoadingIndicator className="loading-container" showBackground={true} />}
				<Login onSubmit={this.doLogin} loginInProgress={this.state.loginInProgress} />			
			</div>
		)
	}
}

export default connect(null, { initiateLogin })(LoginContainer);