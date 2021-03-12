import React from 'react'
import { Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Menubar = () => {
  const history = useHistory()
  const handleLogout = () => {
    localStorage.clear()
    history.push("/")
  }
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <div className="d-flex">
          <Link to="/" className="text-white mr-4">
            <h4>
              Inventory-App
            </h4>
          </Link>
          <Button 
            variant="outline-danger"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </Navbar>
    </div>
  )
}

export default Menubar
