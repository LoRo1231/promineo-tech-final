import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function Header(){
    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"> Liberty Imaging </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={NavLink} to="/addjob"> Add Job </Nav.Link>
                            <Nav.Link as={NavLink} to="/"> SP Schedule </Nav.Link>
                            
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;