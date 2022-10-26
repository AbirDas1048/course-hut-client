import React, { useContext } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Header.css';

const Header = () => {

    const { mood, setMood } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant='light'>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src=""
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Course Hut
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                    <Nav >
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/home">Home</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to='/courses'>Courses</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/faq">FAQ</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'active' : undefined}" to="/blog">Blog</NavLink>
                    </Nav>
                    <Form className='mx-2'>
                        <Form.Check onChange={() => setMood(!mood)}
                            type="switch"
                            id="custom-switch"
                            label={mood ? "Light" : "Dark"}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;