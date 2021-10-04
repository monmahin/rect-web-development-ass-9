import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const HomeInfo = (props) => {
  const {id, img, title, info } = props.course
  
  const history=useHistory()
    const url =`/home-info/${id}`
    const handleCourseInfo = () => {
        history.push(url)
    }

  
    return (
        <Col>
        <Card style={{height:"400px"}}>
          <Card.Img  className="w-50 p-3 h-50 mx-auto rounded" src={img} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text  style={{textAlign:"Justify"}}>
              <p>{info}</p>
              
            </Card.Text>
          </Card.Body>
          <button
            onClick={handleCourseInfo}
            className="btn btn-primary rounded-0">Enrol Now</button>
        </Card>
      </Col>
    );
};

export default HomeInfo;