import React from 'react';
import './footer.css';
import { Row } from 'antd';

const Footer = () => (
  <div>
    <Row>
      <p id="links">
        <a href="">Instagram,</a>
        <a href="">LinkedIn,</a>
        <a href="">Dribbble</a>
      </p>
    </Row>
    <Row>
      <p id="email">
        <a href="">Brindis.Alexander@gmail.com</a>
      </p>
    </Row>
  </div>
);

export default Footer;