import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import Logo from '../components/Logo';
import config from '../config';
import markdown from '../helpers/markdown';

const Main = () => {
  const {
    title,
    description,
    pages,
  } = config;
  const html = markdown.render(description || '');
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-1 text-center">{title}</h1>
        </Col>
      </Row>
      <Row>
        <Col className="p-3" xs="2"><Logo /></Col>
        <Col xs="5">{ html && (<div dangerouslySetInnerHTML={{ __html: html }} />) }</Col>
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
