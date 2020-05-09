import React, { Component } from 'react';
import ArtistPage from '../../../containers/ArtistPage';

class ArtistWikiPage extends Component {
  render() {
    const { match } = this.props;
    const { artist, page } = match.params;
    return (
      <ArtistPage artist={artist} slug={page} />
    );
  }
}

export default ArtistWikiPage;
