import React from 'react';
import { Button, Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import { FaRegClock, FaStarHalfAlt } from 'react-icons/fa';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';

const CourseDetails = () => {
    const [course] = useLoaderData();
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/checkOut/${course.id}`)
        //navigate(`/home`)
    }

    return (
        <Container className='my-5'>
            {
                course ?
                    <>
                        <h3 className='text-center mb-3'>Details of <span className='text-primary'>{course.name}</span> </h3>
                        <div className="row g-0 bg-light position-relative">
                            <div className="col-md-4 mb-md-0 p-md-4">
                                <img src={course.image} className="w-100" alt="..." />
                            </div>
                            <div className="col-md-8 p-4 ps-md-0">
                                {/* <h5 className="mt-0">{course.name}</h5> */}
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
                                <div className="text-center my-3">
                                    <Button variant='primary' size='sm' onClick={handleNavigate}>Checkout this course</Button>
                                </div>

                            </div>
                        </div>
                        <h3 className='text-center text-primary my-3'>There are {course.outcomes.length} outcomes</h3>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                            <Row>
                                <Col sm={3}>
                                    <Nav variant="pills" className="flex-column">
                                        {
                                            course.outcomes.map((outcome, idx) => <Nav.Item key={idx}>
                                                <Nav.Link eventKey={idx}>{outcome.title}</Nav.Link>
                                            </Nav.Item>)
                                        }
                                    </Nav>
                                </Col>
                                <Col sm={9}>
                                    <Tab.Content>
                                        {
                                            course.outcomes.map((outcome, idx) => <Tab.Pane key={idx} eventKey={idx}>
                                                <h6 className='fw-bold'>{outcome.title}</h6>
                                                <p>{outcome.details}</p>
                                            </Tab.Pane>)
                                        }
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>

                        <div className="text-center my-3">
                            <NavLink to='/courses' >
                                <Button variant='success' size='sm'>See all courses</Button>
                            </NavLink>
                        </div>


                    </>
                    :
                    <h3 className='text-center mb-3 text-danger'>No Courses found </h3>
            }

        </Container >
    );
};

export default CourseDetails;