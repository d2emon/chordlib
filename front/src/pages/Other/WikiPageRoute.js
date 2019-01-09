import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import WikiPage from '../../containers/WikiPage';

const WikiPageRoute = ({ match }) => {
  const { page } = match.params;
  return (
    <Container className="my-1">
      <Row>
        <Col>
          <WikiPage slug={page} />
        </Col>
      </Row>
    </Container>
  );
};

WikiPageRoute.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WikiPageRoute;
