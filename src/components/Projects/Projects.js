import React from 'react';

import Col from 'react-bootstrap/Col';
import classes from './Projects.css';

import Project from './Project';

const projects = () => {
  return (
    <Col className={classes.Col} md={6} sm={12}>
      <h1>Projects Section</h1>
      <Project />
    </Col>
  );
};

export default projects;
