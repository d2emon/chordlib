import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'reactstrap';

const ErrorMessage = ({ error, ...props }) => <Alert color="danger" {...props}>{error}</Alert>;

ErrorMessage.defaultProps = () => ({
  error: '',
});

ErrorMessage.propTypes = () => ({
  error: PropTypes.string,
});

export default ErrorMessage;
