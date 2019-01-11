import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardBody, CardHeader, CardTitle,
} from 'reactstrap';

const ArtistWikiCard = ({ artist }) => (
  <Card>
    <CardHeader>
      <CardTitle>
        {
          artist.wikiLink
            ? <a href={artist.wikiLink}>{artist.name}</a>
            : artist.name
        }
      </CardTitle>
      <CardBody>
        {artist.image && (
          <img
            src={artist.image}
            alt={artist.name}
            title={artist.name}
            width="200px"
          />
        )}
        <div>
          <h5>Жанры</h5>
          <ul>
            {Array.isArray(artist.genre)
              ? artist.genre.map(genre => <li key={genre}>{genre}</li>)
              : <li>{artist.genre}</li>}
            {artist.genres && artist.genres.map(genre => <li key={genre}>{genre}</li>)}
          </ul>
        </div>
        {artist.description}
      </CardBody>
    </CardHeader>
  </Card>
);

ArtistWikiCard.defaultProps = () => ({
  artist: {},
});

ArtistWikiCard.propTypes = () => ({
  artist: PropTypes.shape({
    name: PropTypes.string,
    wikiLink: PropTypes.string,
    image: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.string,
    ),
  }),
});

export default ArtistWikiCard;
