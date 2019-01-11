import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  CardText,
  CardImg,
} from 'reactstrap';
import Loader from './Loader';

const ArtistDescription = ({ artist }) => {
  if (!artist) return <Loader />;
  return (
    <Fragment>
      {artist.image && (
        <CardImg
          top
          height="200px"
          src={artist.image}
          title={artist.name}
          alt={artist.name}
        />
      )}
      <Row>
        <Col>
          {artist.description && (
            <CardText
              dangerouslySetInnerHTML={{ __html: artist.html }}
            />
          )}
        </Col>
      </Row>
    </Fragment>
  );
};

ArtistDescription.defaultProps = () => ({
  artist: null,
});

ArtistDescription.propTypes = () => ({
  artist: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    html: PropTypes.string,
    albums: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
      }),
    ),
    songs: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        slug: PropTypes.string,
      }),
    ),
    pages: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }),
});

export default ArtistDescription;
