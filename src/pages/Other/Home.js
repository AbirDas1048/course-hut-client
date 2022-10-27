import React from 'react';
import { Button, Carousel, Container, Row } from 'react-bootstrap';
import { NavLink, useLoaderData } from 'react-router-dom';
import sliderImage1 from '../../images/slider1.jpg';
import sliderImage2 from '../../images/slider2.jpg';
import sliderImage3 from '../../images/slider3.jpg';
import Course from '../Courses/Course';

const Home = () => {

    const featuredCourses = useLoaderData();
    return (
        <Container className='my-5'>
            <Carousel interval={1000}>
                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src={sliderImage1}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImage2}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImage3}
                        alt="First slide"
                    />
                </Carousel.Item>
            </Carousel>

            <h3 className='text-center text-primary my-5'>Top Selling Courses</h3>
            <Row lg={3} md={2} xs={1} className="g-4">
                {
                    featuredCourses.map(course => <Course key={course.id} course={course}></Course>)
                }
            </Row>

            <div className="text-center my-3">
                <NavLink to='/courses' >
                    <Button variant='success' size='sm'>See all courses</Button>
                </NavLink>
            </div>

        </Container>
    );
};

export default Home;