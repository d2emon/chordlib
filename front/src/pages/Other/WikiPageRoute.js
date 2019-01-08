import React from 'react';
import PropTypes from 'prop-types';
import WikiPage from '../../containers/WikiPage';

const WikiPageRoute = ({ match }) => {
  const { page } = match.params;
  return <WikiPage slug={page} />;
};

WikiPageRoute.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default WikiPageRoute;
