import React from 'react';
import projectsAPI from '../../api';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';

import './project.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons'
import Footer from '../footer/footer';

library.add(faLongArrowAltLeft)


const Project = (props) => {
    const index = parseInt(props.match.params.number) - 1;
    const project = projectsAPI.projects[index];

  return(
    <div id="project__container">
      <Link id="back" to="/">
        <FontAwesomeIcon className="back__arrow" icon="long-arrow-alt-left" /><p className="back">back</p>
      </Link>
      <Row>
        <Col md={14}>
        <div id="image__container">
          <div id="overlay"/>
          <img id="image" src={require(`../../img/${index + 1}.jpg`)} alt={project.name} className="large__image"/>
        </div>
        </Col>
      </Row>
      <Row>
        <Col md={14}>
          <h1 id="project__name">{ project.name }</h1>
        </Col>

        <Col md={14}>
          <p id="project__desc">{ project.description }</p>
        </Col>
      </Row>
      <Footer/>
    </div>
  )
}

export default Project;