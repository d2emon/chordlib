import React, { Component } from 'react';
import Form from '../containers/AddSong';

class AddSong extends Component {
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
        song={{ author: this.state.artist }}
      />
    );
  }
}

export default AddSong;
