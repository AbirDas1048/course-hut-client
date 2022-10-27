import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const FAQ = () => {
    return (
        <Container className='my-5'>
            <Row className="justify-content-md-center">
                <Col xs lg="10">
                    <h3 className='text-center mb-3'>Frequently Asked Questions</h3>
                    <Accordion defaultActiveKey="0" >
                        <Accordion.Item eventKey="0" className=''>
                            <Accordion.Header className=''>What is the refund policy?</Accordion.Header>
                            <Accordion.Body>
                                If you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Can I just enroll in a single course?</Accordion.Header>
                            <Accordion.Body>
                                Yes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate, or you can audit it to view the course materials for free. When you subscribe to a course that is part of a Specialization, you’re automatically subscribed to the full Specialization. Visit your learner dashboard to track your progress.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Is financial aid available?</Accordion.Header>
                            <Accordion.Body>
                                Yes. In select learning programs, you can apply for financial aid or a scholarship if you can’t afford the enrollment fee. If fin aid or scholarship is available for your learning program selection, you’ll find a link to apply on the description page.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Can I take the course for free?</Accordion.Header>
                            <Accordion.Body>
                                When you enroll in the course, you get access to all of the courses in the Specialization, and you earn a certificate when you complete the work. If you only want to read and view the course content, you can audit the course for free.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="5">
                            <Accordion.Header>Is this course really 100% online? Do I need to attend any classes in person?</Accordion.Header>
                            <Accordion.Body>
                                This course is completely online, so there’s no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

        </Container>
    );
};

export default FAQ;