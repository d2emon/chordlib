import React from 'react';
import PropTypes from 'prop-types';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';

const SubcultureLink = ({ subculture }) => (subculture.link
  ? <ListGroupItem tag="a" href={subculture.link}>{subculture.title}</ListGroupItem>
  : <ListGroupItem>{subculture.title}</ListGroupItem>
);

SubcultureLink.defaultProps = () => ({
  subculture: {},
});

SubcultureLink.propTypes = () => ({
  subculture: PropTypes.shape({
    title: PropTypes.string,
    link: PropTypes.string,
  }),
});

const SubcultureLinks = ({ subcultures }) => (
  <ListGroup>
    {subcultures.map(subculture => (
      <SubcultureLink key={subculture.title} subculture={subculture} />
    ))}
  </ListGroup>
);

SubcultureLinks.defaultProps = () => ({
  subcultures: [],
});

SubcultureLinks.propTypes = () => ({
  subcultures: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    }),
  ),
});

export default SubcultureLinks;
