import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import PagesList from '../../containers/PagesList';

const PagesListRoute = () => (
  <Container>
    <Row>
      <Col>
        <h1 className="display-1 text-center">Вики-страницы</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <PagesList />
      </Col>
    </Row>
  </Container>
);

export default PagesListRoute;
