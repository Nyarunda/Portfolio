import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import classes from './Navbar.css';

import Aux from '../../hoc/Aux';
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <Aux>
      <Container className={classes.Navbar} fluid={true}>
        <Row>
          <Col>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
              <Navbar.Brand href="#home">Ezra Nyagaka</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                id="responsive-navbar-nav"
                className="justify-content-end"
              >
                <Nav className={classes.Nav}>
                  <Link className="nav-link" to="/resume">
                    Resume
                  </Link>
                  <Link className="nav-link" to="/github">
                    GitHub
                  </Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </Aux>
  );
};

export default navbar;
