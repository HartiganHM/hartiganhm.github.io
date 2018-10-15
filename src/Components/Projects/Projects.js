import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Card from '../Card/Card';
import projectsData from '../../data/projectsData';
import PropTypes from 'prop-types';
import './Projects.css';

class Projects extends Component {
  render() {
    const projects = projectsData.map((project, index) => (
      <Card
        key={index}
        cardData={project}
        toggleDetails={this.props.toggleDetails}
      />
    ));

    return (
      <div className="Projects">
        <Nav currentPage="Projects" />
        <div className="card-container">{projects}</div>
      </div>
    );
  }
}

export default Projects;

Projects.propTypes = {
  toggleDetails: PropTypes.func
};
