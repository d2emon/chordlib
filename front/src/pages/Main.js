import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import { markdown } from 'markdown';
import Logo from '../components/Logo';
import config from '../config';

const Main = () => {
  const { title, description, pages } = config;
  const html = description
    ? markdown.toHTML(description)
    : false;
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-1 text-center">{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="p-3" xs="2"><Logo /></Col>
        <Col xs="5">
          { html && (<div dangerouslySetInnerHTML={{ __html: html }} />) }
        </Col>
        <Col xs="5">
          <ListGroup>
            { pages.map(page => (
              <ListGroupItem tag={Link} to={page.link || '/'} key={page.title}>{page.title}</ListGroupItem>
            )) }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
