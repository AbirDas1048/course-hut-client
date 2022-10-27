import React from 'react';
import { Card, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { NavLink, useLoaderData } from 'react-router-dom';
import Course from './Course';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <Container className='my-5'>
            <h3 className='text-center mb-3'>Courses</h3>
            <Row className='g-4'>
                <Col md={4}>
                    <Card>
                        <Card.Header className='text-center'>Courses</Card.Header>
                        <ListGroup variant="flush">
                            {
                                courses.map(course => <NavLink className="list-group-item list-group-item-action {({ isActive }) => isActive ? 'active' : undefined}" key={course.id} to={`/course/${course.id}`}>{course.name}</NavLink>)
                            }
                        </ListGroup>

                    </Card>
                </Col>

                <Col md={8}>
                    <Row lg={3} md={2} xs={1} className="g-4">
                        {
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Courses;