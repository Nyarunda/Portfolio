import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import ImgReact from '../../assets/images/react.png';

import Card from './Card';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: 0,
          title: ' Django E-commerce',
          subTitle:
            'This is a an Ecommerce where a client purchase goods online',
          imgSrc: ImgReact,
          link: '',
          selected: false,
        },
        {
          id: 1,
          title: ' Talk Sports',
          subTitle:
            'This is a sport channel where sports fannatics chat and share sport ideas like betting odds for free',
          imgSrc: ImgReact,
          link: '',
          selected: false,
        },
        {
          id: 2,
          title: 'React Burger',
          subTitle:
            'This is a react project where user create an account then login to create burger. It simulate the cost of each burger from its content',
          imgSrc: ImgReact,
          link: 'https://react-burger-cca4b.web.app/',
          selected: false,
        },
      ],
    };
  }
  handleCardClick = (id, card) => {
    console.log(id);
    let projects = [...this.state.projects];
    projects[id].selected = projects[id].selected ? false : true;

    projects.forEach((project) => {
      if (project.id !== id) {
        project.selected = false;
      }
    });

    this.setState({ projects });
  };

  makeProject = (projects) => {
    return projects.map((project) => {
      return (
        <Card
          project={project}
          click={(e) => this.handleCardClick(project.id, e)}
          key={project.id}
        />
      );
    });
  };
  render() {
    return <Aux>{this.makeProject(this.state.projects)}</Aux>;
  }
}

export default Project;
