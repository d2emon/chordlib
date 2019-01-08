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
        <Col xs="3"><Logo /></Col>
        <Col xs="auto">
          <Row>
            <Col>
              <h1>{title}</h1>
            </Col>
          </Row>
          {
            html
            && (
              <Row>
                <Col dangerouslySetInnerHTML={{ __html: html }} />
              </Row>
            )
          }
          <Row>
            <Col>
              <ListGroup>
                { pages.map((page, index) => (
                  <ListGroupItem tag={Link} to={page.link || '/'} key={index}>{page.title}</ListGroupItem>
                )) }
              </ListGroup>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
