import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux'

const Toolbar = ({ auth }) => (
	<Navbar color="light" light expand="md">
		<NavbarBrand href="/">Feeds Bar</NavbarBrand>
		<Nav>
			<NavItem>
				<Link to="/sources" className="nav-link">Sources</Link>
			</NavItem>
		</Nav>
		{auth && <Nav className="ml-auto">
			<NavItem>
				<Link to="/login" className="nav-link">Login</Link>
			</NavItem>
			<UncontrolledDropdown nav inNavbar>
				<DropdownToggle nav caret>
					Profile
				</DropdownToggle>
				<DropdownMenu right>
					<DropdownItem onClick={() => { console.log('logging out...') }}>
						Logout
					</DropdownItem>
				</DropdownMenu>
			</UncontrolledDropdown>
		</Nav>}
	</Navbar>
);

const mapStateToProps = (state) => ({
	auth: state.auth
})

export default connect(mapStateToProps)(Toolbar);