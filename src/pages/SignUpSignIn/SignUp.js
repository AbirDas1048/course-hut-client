import React, { useContext, useState } from 'react';
import { Button, ButtonGroup, Col, Container, Form, Row, Tab, Tabs } from 'react-bootstrap';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignUp = () => {

    const { signIn, setLoading, createUser, updateUserProfile, providerLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [loginError, setLoginError] = useState('');
    const [registrationError, setRegistrationError] = useState('');

    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setLoginError('');
                navigate(from, { replace: true });

            })
            .catch(error => {
                //console.error(error);
                setLoginError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                //console.log(user);
                setRegistrationError('');
                form.reset();

                handleUpdateUserProfile(name, photoURL);
                navigate(from, { replace: true });
            })
            .catch(e => {
                //console.error(e);
                setRegistrationError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        };
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => setRegistrationError(error.message));
    }

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    const githubProvider = new GithubAuthProvider();

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <Container className='my-5'>
            <h3 className='text-center text-primary my-3'>SignUp/SignIn</h3>
            <Row className="justify-content-md-center">
                <Col xs lg="8">
                    <Tabs defaultActiveKey="signIn" id="fill-tab-example justify-tab-example" className="mb-3" justify fill >
                        <Tab eventKey="signIn" title="SignIn">
                            <Form onSubmit={handleSignIn}>
                                {/* <Form> */}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" required />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                                <Form.Text className="text-danger">
                                    {loginError}
                                </Form.Text>
                            </Form>
                        </Tab>
                        <Tab eventKey="signUp" title="SignUp">
                            <Form onSubmit={handleSignUp}>
                                {/* <Form> */}
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control name="name" type="text" placeholder="Your Full Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Photo URL</Form.Label>
                                    <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" type="password" placeholder="Password" required />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Register
                                </Button>
                                <Form.Text className="text-danger">
                                    {registrationError}
                                </Form.Text>
                            </Form>
                        </Tab>

                    </Tabs>

                    <div className='my-3 text-center'>
                        <h4>Or</h4>
                        <ButtonGroup>
                            <Button className='mx-3' variant="outline-primary" onClick={handleGoogleSignIn} ><FaGoogle></FaGoogle> Login with Google</Button>
                            <Button variant="outline-dark" onClick={handleGithubSignIn}><FaGithub></FaGithub> Login with Github</Button>
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default SignUp;