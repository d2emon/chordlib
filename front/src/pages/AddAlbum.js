import React, { Component } from 'react';
import Form from '../containers/AddAlbum';

class AddArtist extends Component {
  constructor(props) {
    super(props);

    const { match } = props;

    this.state = {
      artist: match.params.artist,
    };
  }

  render() {
    return (
      <Form
        album={{ author: this.state.artist }}
      />
    );
  }
}

export default AddArtist;
