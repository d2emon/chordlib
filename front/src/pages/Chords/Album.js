import React, { Component } from 'react';
import Album from '../../containers/Album';

class AlbumPage extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    this.state = {
      album: match.params.album,
      artist: match.params.artist,
    };
  }

  render() {
    return (
      <Album
        slug={this.state.album}
        artistSlug={this.state.artist}
      />
    );
  }
}

export default AlbumPage;
