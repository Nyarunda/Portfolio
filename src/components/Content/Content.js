import React from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Content.css';

const content = (props) => {
  return (
    <Row className="justify-content-center">
      <Col md="8" className={classes.Content}>
        <div>{props.children}</div>
      </Col>
    </Row>
  );
};

export default content;
