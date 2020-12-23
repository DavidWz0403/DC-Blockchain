import React, { Component } from 'react'
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavbarDC extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">DC Blockchain</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav>
                <Form inline>
                    <Button variant="outline-info">Create Account</Button>
                </Form>
            </Navbar>
        )
    }
}

export default NavbarDC; 