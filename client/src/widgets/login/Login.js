import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';  // Container, Row, Col
import './Login.css';

class Login extends Component {
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log('this.state', this.state);
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
							<Button color="primary">Submit</Button>
						</div>
					</Form>
				</div>
			</div>
		);
	}

}

export default Login;