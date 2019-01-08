import React, { Component } from 'react';
import Artist from '../../containers/Artist';

class ArtistPage extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    this.state = {
      artist: match.params.artist,
    };
  }

  render() {
    return (
      <Artist slug={this.state.artist} />
    );
  }
}

export default ArtistPage;
