import React from 'react';
import Content from '../../components/Content/Content';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './AboutPage.css';

const aboutPage = (props) => {
  return (
    <div>
      <Container fluid={true} className={classes.AboutPage}>
        <Row className="pt-2 pb-4 justify-content-center">
          <Col md={8} sm={4}>
            {props.about && (
              <h2 className="display-3 font-weight-bolder">{props.about}</h2>
            )}
            {props.subTitle && (
              <h5 className="display-5 font-weight-bolder">{props.subTitle}</h5>
            )}
          </Col>
        </Row>
        <Content>
          <p>
            Enthusiastic fullstack developer with 6+ months experience in the
            complete product
          </p>

          <p>
            Eager to learn new technology and enrich myself as well as the
            company.
          </p>
          <p>Knowledge in React Js, ES6,Html5, css3.</p>
          <p>Interested to work in software develpment and software testing.</p>
          <p>Development lifecycle of successfully hosted projects.</p>
        </Content>
      </Container>
    </div>
  );
};

export default aboutPage;
