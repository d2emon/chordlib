import React, { Fragment } from 'react';
import { Link, Route } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import config from '../../config';
import Misheard from './Misheard';

const PagesList = () => {
  const { wiki } = config;
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="display-1 text-center">Разное</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            { wiki.map(page => (
              <ListGroupItem
                tag={Link}
                to={page.link}
                key={page.link}
              >
                {page.title}
              </ListGroupItem>
            )) }
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

const Other = () => (
  <Fragment>
    <Route exact path="/other" component={PagesList} />
    <Route path="/misheard" component={Misheard} />
  </Fragment>
);

export default Other;
