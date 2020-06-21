import React from 'react';
import Aux from '../hoc/Aux';

import Projects from '../components/Projects/Projects';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

const homePage = (props) => {
  return (
    <Aux>
      <Jumbotron className="bg-transparent">
        <Container fluid={false}>
          <Row className="p-5 justify-content-center py-5">
            <Projects />
            <Col className="p-0" md={6} sm={12}>
              {props.title && (
                <h1 className="display-1 font-weight-bolder">{props.title}</h1>
              )}
              {props.subTitle && (
                <h1 className="display-4 font-weight-light">
                  {props.subTitle}
                </h1>
              )}
              {props.lastTitle && (
                <h1 className="lead font-weight-light">{props.lastTitle}</h1>
              )}
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </Aux>
  );
};

export default homePage;
