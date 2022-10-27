import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaStarHalfAlt, FaRegClock, FaArrowRight } from 'react-icons/fa'

const Course = ({ course }) => {
    const { id, name, image, subTitle, ratings, duration, instructor } = course;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/course/${id}`)
    }
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className='my-2'>{name}</Card.Title>
                    <Card.Subtitle className='my-2'>{subTitle}</Card.Subtitle>
                    <div className='d-flex justify-content-between my-3'>
                        <div>
                            <span className='m-1'> <FaStarHalfAlt className='text-warning'></FaStarHalfAlt> </span>
                            <span>{ratings}</span>
                        </div>
                        <div>
                            <span className='m-1'> <FaRegClock></FaRegClock> </span>
                            <span>{duration}</span>
                        </div>
                    </div>

                    <p>Instructor: {instructor}</p>
                    <Button variant='primary' onClick={handleNavigate}>Details <FaArrowRight></FaArrowRight></Button>

                </Card.Body>
            </Card>
        </Col>
    );
};

export default Course;