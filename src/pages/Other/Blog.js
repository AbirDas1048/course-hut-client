import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='my-5'>
            <Row className="justify-content-md-center">
                <Col xs lg="10">
                    <h3 className='text-center mb-3'>Blogs</h3>
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0" className=''>
                            <Accordion.Header className=''>What is CORS?</Accordion.Header>
                            <Accordion.Body>
                                CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access our resources.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why are we using firebase? What other options do we have to implement authentication?</Accordion.Header>
                            <Accordion.Body>
                                Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                                <br />
                                Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                                Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>How does the private route work?</Accordion.Header>
                            <Accordion.Body>
                                Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                            <Accordion.Body>
                                Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project!

                                Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.

                                A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally, libraries in Node.js are written using non-blocking paradigms, making blocking behavior the exception rather than the norm.

                                When Node.js performs an I/O operation, like reading from the network, accessing a database or the filesystem, instead of blocking the thread and wasting CPU cycles waiting, Node.js will resume the operations when the response comes back.

                                This allows Node.js to handle thousands of concurrent connections with a single server without introducing the burden of managing thread concurrency, which could be a significant source of bugs.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

        </Container>
    );
};

export default Blog;