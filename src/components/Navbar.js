import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Bar = () => {
  return (
    <Navbar bg="light">
      <Navbar.Brand href="/">graphql2chartjs examples</Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <NavDropdown title="Examples" id="basic-nav-dropdown">
            <NavDropdown.Item href="/bar">Bar</NavDropdown.Item>
            <NavDropdown.Item href="/line">Line</NavDropdown.Item>
            <NavDropdown.Item href="/pie">Pie</NavDropdown.Item>
            <NavDropdown.Item href="/doughnut">Doughnut</NavDropdown.Item>
            <NavDropdown.Item href="/radar">Radar</NavDropdown.Item>
            <NavDropdown.Item href="/scatter">Scatter</NavDropdown.Item>
            <NavDropdown.Item href="/bubble">Bubble</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Bar;

