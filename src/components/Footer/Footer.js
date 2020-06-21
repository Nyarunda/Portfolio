import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Footer.css';

const footer = () => {
  return (
    <footer>
      <Container fluid={true}>
        <Row className={classes.Raw}>
          <Col className={classes.Col} md={12} sm={4}>
            <p>Ezra Nyagaka</p>
            <p>GIthub</p>
            <p>Facebook</p>
            <p>Instagram</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default footer;
