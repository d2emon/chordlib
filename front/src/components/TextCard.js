import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
} from 'reactstrap';

const TextCard = ({ text, ...props }) => (
  <Card {...props}>
    <CardBody dangerouslySetInnerHTML={{ __html: text }} />
  </Card>
);

TextCard.defaultProps = () => ({
  text: '',
});

TextCard.propTypes = () => ({
  text: PropTypes.string,
});

export default TextCard;
