import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
// import { compose } from "redux";
import { connect } from 'react-redux';
// import { reduxForm, formValueSelector } from 'redux-form';
import ErrorMessage from '../components/ErrorMessage';
import ArtistCard from '../components/ArtistCard';
// import { unslugify } from '../helpers/slugify';
import * as artistActions from '../actions/artistActions';


class Artist extends Component {
  static get defaultProps() {
    return {
      slug: '',
      error: null,
      artist: null,
      wikipedia: null,
      getArtist: null,
      findArtist: null,
    };
  }

  static get propTypes() {
    return {
      slug: PropTypes.string,
      error: PropTypes.string,
      artist: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
      }),
      wikipedia: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
      }),
      getArtist: PropTypes.func,
      findArtist: PropTypes.func,
    };
  }

  componentWillMount() {
    const { slug, getArtist } = this.props;
    getArtist(slug);
  }

  componentDidUpdate(prevProps) {
    const {
      slug,
      artist,
      getArtist,
      findArtist,
    } = this.props;
    if (prevProps.slug !== slug) getArtist(slug);
    // if (!nextProps.isFetching) this.setState({ artist: this.getArtist(nextProps) });
    setTimeout(() => {
      const prevName = prevProps.artist && prevProps.artist.name;
      const name = artist && artist.name;
      if (!name) return;
      if (prevName === name) return;
      findArtist(encodeURIComponent(name));
    }, 1000);
  }

  /*
  getArtist({ artist, slug }) {
    if (artist) return artist;
    console.log('No artist found');
    return {
      name: unslugify(slug),
      slug,
      unprocessed: true,
    };
  }
  */

  render() {
    const { artist, wikipedia, error } = this.props;
    if (error) return <ErrorMessage error={error} />;
    return (
      <ArtistCard
        artist={artist}
        wikipedia={wikipedia}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtist: artistUrl => dispatch(artistActions.getArtist(artistUrl)),
  findArtist: name => dispatch(artistActions.findInWikipedia(name)),
});

const mapStateToProps = state => ({
  artist: state.artists.artist,
  wikipedia: state.artists.wikipedia,
});

/*
export default compose(
    withRouter,
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(AddArtist);
 */

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Artist);
