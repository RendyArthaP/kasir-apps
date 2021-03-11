import React from 'react'
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Menubar = () => {
  return (
    <div>
      <Navbar bg="primary" expand="lg">
        <Link to="/" className="text-white mr-4">
          <h4>
            Inventory-App
          </h4>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/kasir-app" className="text-white mr-3">
              Home
            </Link>
            <Link to="/" className="text-white">
              Login
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Menubar
