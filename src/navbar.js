import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Container} from "react-bootstrap";

function BasicExample() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home" className=''>Store Website</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Orders">Orders</Nav.Link>
                        <Nav.Link href="/Payments">Payments</Nav.Link>
                        <Nav.Link href="/Products">Products</Nav.Link>
                        <Nav.Link href="/Users">Users</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default BasicExample;