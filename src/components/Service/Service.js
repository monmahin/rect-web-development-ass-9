import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
// import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar } from '@fortawesome/free-solid-svg-icons'

const Service = (props) => {
  const ratings = <FontAwesomeIcon icon={faStar} className="text-warning"/>
  const { img, title, info, created, star, price } = props.service
  const circle= {
    width: "50px",
    height: "50px",
    lineHeight: "50px",
    borderRadius: "50%",
    
    color: "#fff",
    textAlign: "center",
    background: "#000"
  }
    return (
      <Col>
        
        <Card style={{ maxWidth: "600px" }}>
        <div className="ms-auto me-3 mt-3" style={circle}>${price}</div>
            <Row md={2} className="align-items-center mx-auto text-center" style={{height:"200px"}}>
            <Col md={4}>
            <Card.Img className="imgFluid rounded" src={img} />
            </Col>
        <Col md={8}>
            <Card.Body>
         <Card.Title>{title}</Card.Title>
          <Card.Text>
            <p style={{textAlign:"Justify"}}>{info}</p>
          </Card.Text>
            </Card.Body>
         </Col>
        </Row>
                <Card.Footer className="d-flex justify-content-between">
            <small>Created by: <i className="text-danger">{created}</i></small>
            <small>{ratings}{ratings}{ratings}{ratings}{ratings}
              <span className="ms-2 fw-bolder">({star})</span>
            </small>
  
                    
    </Card.Footer>
      </Card>
    </Col>
    );
};

export default Service;