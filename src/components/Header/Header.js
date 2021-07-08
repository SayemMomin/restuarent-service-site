import React, { useContext } from 'react';
import logo from '../Images/logo.png'
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [logginUser, setLogginUser] = useContext(UserContext)
    console.log(logginUser);
    return (
        <div className="container">
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/"> <img src={logo} alt=""/> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    {/* <p className="text-primary">{logginUser.email} </p> */}
                    <Button > <Link style={{color: 'white'}} to="/login">Login</Link> 
                        </Button>
                        <Button className="ml-2" style={{color: 'white'}} onClick={() => setLogginUser({})}>Sign Out</Button>
                   

                    
                </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default Header;