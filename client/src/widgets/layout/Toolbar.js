import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavbarBrand, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Toolbar = () => (
	<Navbar color="light" light expand="md">
		<NavbarBrand href="/">Feeds Bar</NavbarBrand>
		<Nav>
			<NavItem>
				<Link to="/sources" className="nav-link">Sources</Link>
			</NavItem>
		</Nav>
		<Nav className="ml-auto">
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
		</Nav>
	</Navbar>
);

export default Toolbar;