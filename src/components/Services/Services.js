import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./learn.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className="my-5">
            <br />
            <br />
           
            <Container fluid>
            <Row xs={1} md={2} className="g-4 mx-auto">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
  }
             </Row>
            </Container>
        </div>
    );
};

export default Services;