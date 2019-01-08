import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { markdown } from 'markdown';
import Logo from '../components/Logo';
import config from '../config';

const Main = () => {
  const { title, text } = config;
  const html = markdown.toHTML(text);
  return (
    <Container>
      <Row>
        <Col xs="3"><Logo /></Col>
        <Col xs="auto">
          <Row>
            <Col>
              <h1>{title}</h1>
            </Col>
          </Row>
          <Row>
            <Col dangerouslySetInnerHTML={{ __html: html }} />
          </Row>
          <Row>
            <Col>
              To get started, edit <code>src/App.js</code> and save to reload.
              <Link to="/home">Home</Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
