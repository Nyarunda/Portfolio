import React from 'react';

import Card from 'react-bootstrap/Card';
import CardBody from './CardBody';
import classes from './Projects.css';

const card = (props) => {
  return (
    <Card
      style={{ width: '20rem' }}
      className={classes.e_card}
      onClick={(e) => props.click(props.project, e)}
    >
      <Card.Img
        variant="top"
        src={props.project.imgSrc}
        alt={props.project.imgSrc}
        className={classes.e_card_image}
        _
      />
      {props.project.selected && (
        <CardBody
          title={props.project.title}
          subTitle={props.project.subTitle}
          link={props.project.link}
          className={classes.e_card_body}
        />
      )}
    </Card>
  );
};

export default card;
