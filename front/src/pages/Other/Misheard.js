import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import { markdown } from 'markdown';
import misheard from '../../database/misheard';

const Misheard = () => (
  <Container>
    <Row>
      <Col>
        <h1 className="display-1 text-center">Misheard lyrics</h1>
      </Col>
    </Row>
    <Row>
      <Col>
        <ul>
          { misheard.map(text => (
            <li key={text} dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }} />
          )) }
        </ul>
      </Col>
    </Row>
  </Container>
);

export default Misheard;
