import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { FaRegClock, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const [course] = useLoaderData();
    const { outcomes } = course;
    console.log(outcomes);
    return (
        <Container className='my-5'>
            <h3 className='text-center mb-3'>Details of {course.name}</h3>
            <div className="row g-0 bg-light position-relative">
                <div className="col-md-4 mb-md-0 p-md-4">
                    <img src={course.image} className="w-100" alt="..." />
                </div>
                <div className="col-md-8 p-4 ps-md-0">
                    <h5 className="mt-0">{course.name}</h5>
                    <p>{course.subTitle}</p>
                    <p>Instructor: {course.instructor}</p>
                    <div className='d-flex justify-content-between my-3'>
                        <div>
                            <span className='m-1'> <FaStarHalfAlt className='text-warning'></FaStarHalfAlt> </span>
                            <span>{course.ratings}</span>
                        </div>
                        <div>
                            <span className='m-1'> <FaRegClock></FaRegClock> </span>
                            <span>{course.duration}</span>
                        </div>
                    </div>
                    <p>{course.description}</p>
                    {/* <a href="#" className="stretched-link">Go somewhere</a> */}
                </div>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            {
                                outcomes.map((outcome, idx) => <Nav.Item key={idx}>
                                    <Nav.Link eventKey={idx}>{outcome.title}</Nav.Link>
                                </Nav.Item>)
                            }
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            {
                                outcomes.map((outcome, idx) => <Tab.Pane key={idx} eventKey={idx}>
                                    {outcome.details}
                                </Tab.Pane>)
                            }
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container >
    );
};

export default CourseDetails;