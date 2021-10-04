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
            
            <Container fluid>
            <Row xs={1} md={3} className="g-4 mx-auto my-5">
                {
                    courses.map(course => <HomeInfo
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