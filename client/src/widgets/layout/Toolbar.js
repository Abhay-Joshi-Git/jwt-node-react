import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

const Toolbar = ({ auth, isLoginPage, location }) => (
	<Navbar color="light" light expand="md" className="mb-4">
		<NavbarBrand>
			<Link to="/">Feeds Bar</Link>
		</NavbarBrand>
		<Nav>
			<NavItem>
				<Link to="/sources" className="nav-link">Sources</Link>
			</NavItem>
		</Nav>
		<Nav className="ml-auto">
			{!auth && !isLoginPage && <NavItem>
				<Link to="/login" className="nav-link">Login</Link>
			</NavItem>}
			{auth && <UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					Profile
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem onClick={() => { console.log('logging out...') }}>
						Logout
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>}
		</Nav>
	</Navbar>
);

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.auth,
		isLoginPage: ownProps.location.pathname === '/login'
	}
}

export default withRouter(
	connect(mapStateToProps)(Toolbar)
);