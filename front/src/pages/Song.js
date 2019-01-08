import React, { Component } from 'react';
import Song from '../containers/Song';

class AlbumPage extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    this.state = {
      slug: match.params.slug,
      artist: match.params.artist,
    };
  }

  render() {
    return (
      <Song
        slug={this.state.slug}
        artistSlug={this.state.artist}
      />
    );
  }
}

export default AlbumPage;
