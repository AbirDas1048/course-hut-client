import React from 'react';
import { Container, Tab } from 'react-bootstrap';
import { FaRegClock, FaStarHalfAlt } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const [course] = useLoaderData();

    return (
        <Container className='my-5'>
            {
                course ?
                    <>
                        <h3 className='text-center mb-3'>Checkout <span className='text-primary'>{course.name}</span> </h3>
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
                            </div>
                        </div>


                    </>
                    :
                    <h3 className='text-center mb-3 text-danger'>No Courses found </h3>
            }

        </Container >
    );
};

export default CheckOut;