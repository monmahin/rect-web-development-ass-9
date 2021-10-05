import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';

import HomeInfo from '../HomeInfo/HomeInfo';


const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./learn.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))
    }, [])
    
    
    return (
        <div className="my-5">
            <h1
             className="bg-danger text-center text-white py-5 text-uppercase ">
                Popular Web Design Courses</h1>
            <Container fluid>
            <Row xs={1} md={3} className="g-4 mx-auto my-5">
                {
                    courses.slice(0,3).map(course => <HomeInfo
                        key={course.id}
                        
                        course={course}
                    ></HomeInfo>)
  }
             </Row>
            </Container>
        </div>
    );
};

export default Home;