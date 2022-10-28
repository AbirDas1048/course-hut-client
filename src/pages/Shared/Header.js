import React, { useContext } from 'react';
import { Container, Form, Image, Nav, Navbar, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import './Header.css';
import logo from '../../images/logo.png'
import { FaUser } from 'react-icons/fa';

const Header = () => {

    const { mood, setMood, user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <Navbar collapseOnSelect sticky='top' expand="lg" bg={mood ? "light" : "dark"} variant={mood ? "light" : "dark"}>
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    Course Hut
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                    <Nav >
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'navActive' : undefined}" to="/home">Home</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'navActive' : undefined}" to='/courses'>Courses</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'navActive' : undefined}" to="/faq">FAQ</NavLink>
                        <NavLink className="nav-link {({ isActive }) => isActive ? 'navActive' : undefined}" to="/blog">Blog</NavLink>
                        {
                            user ?
                                <>

                                    {
                                        user?.photoURL ?
                                            <OverlayTrigger
                                                key="bottom"
                                                placement="bottom"
                                                overlay={
                                                    <Tooltip id="tooltip-bottom">
                                                        {user?.displayName ? user?.displayName : ""}
                                                    </Tooltip>
                                                }
                                            >
                                                <NavLink className="nav-link {({ isActive }) => isActive ? 'navActive' : undefined}" to="#"><Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image></NavLink>

                                            </OverlayTrigger>
                                            :
                                            <OverlayTrigger
                                                key="bottom"
                                                placement="bottom"
                                                overlay={
                                                    <Tooltip id="tooltip-bottom">
                                                        {user?.displayName ? user?.displayName : ""}
                                                    </Tooltip>
                                                }
                                            >
                                                <NavLink className="nav-link {({ isActive }) => isActive ? 'navActive' : undefined}" to="#"><FaUser></FaUser></NavLink>
                                            </OverlayTrigger>


                                    }

                                    <NavLink className="nav-link {({ isActive }) => isActive ? 'navActive' : undefined}" to="" onClick={handleLogout}>SignOut</NavLink>
                                </>
                                :
                                <NavLink className="nav-link {({ isActive }) => isActive ? 'navActive' : undefined}" to="/signUp">SignUp/SignIn</NavLink>
                        }

                    </Nav>
                    <Form className='mx-2'>
                        <Form.Check onChange={() => setMood(!mood)}
                            type="switch"
                            id="custom-switch"
                            label={mood ? "Light" : "Dark"}
                            className={mood ? "text-dark" : "text-light"}
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;