import React, { Component } from 'react';
import './homepage.css';
import HoverImg from '../hoverEffect/hoverEffect';
import projectsAPI from '../../api';
import { Row, Col } from 'antd';
import { Link }from 'react-router-dom';
import Footer from '../footer/footer';

class Homepage extends Component {
  componentDidMount() {
    Array.from(document.querySelectorAll('.block__link')).forEach(link => new HoverImg(link));
  }

  render() {
    return (
      <div id="homepage__container">
        <Row>
          <Col md={12}>
            <Row>
              <p className="title__text">Works</p>
            </Row>

            <div className="projects block" data-fx="1">
              {projectsAPI.projects.map((el, i) =>
                <Row key={i}>
                  <Link to={`/artwork/${i + 1}`} className="block__link" data-img={require(`../../img/${i+1}.jpg`)}>
                    <div className="project text">
                      <Col sm={12}>
                        <p className={"project__" + i + " project__name"}>{el.name}</p>
                      </Col>
                      <Col sm={12}>
                        <p className={"project__" + i +  " project__medium"}>{el.medium}</p>
                      </Col>
                    </div>
                  </Link>
                </Row>
              )}
            </div>
          </Col>

          <Col md={{span: 6, offset: 3}}>
            <Row>
              <p className="title__text">About</p>
            </Row>
            <p className="text about">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in.</p>
          </Col>
        </Row>
        <Footer/>
      </div>
    );
  }
}

export default Homepage;