import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';

function NavbarBTS() {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="#home">
					<img src={logo} style={{ height: 75 }} alt="Fake Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#features">Directory</Nav.Link>
						<NavDropdown title="Fake Projects" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Basket Weaving (Program currently under construction)</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">Dunking on Haters (Court is being built now)</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Fastest Employees (results coming soon!)</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.5">Projects for making money (Still in the brainstorming phase)</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</>
	);
}

export default NavbarBTS;