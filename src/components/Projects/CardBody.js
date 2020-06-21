import React from 'react';
import { useSpring, animated } from 'react-spring';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import classes from './Projects.css';

const cardBody = (props) => {
  const spring = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Card.Body>
      <Card.Title className={classes.e_card_title}>{props.title}</Card.Title>
      <animated.div style={spring}>
        <Card.Text>{props.subTitle}</Card.Text>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" className={classes.btn}>
            Checkout
          </Button>
        </a>
      </animated.div>
    </Card.Body>
  );
};

export default cardBody;
