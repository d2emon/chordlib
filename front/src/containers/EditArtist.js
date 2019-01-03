import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ArtistForm from '../forms/ArtistForm';
import { updateArtist } from "../actions/artistActions";

class EditArtist extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (values, dispatch) {
        dispatch(updateArtist(values))
            .then(() => this.props.history.push(`/artist/${values.slug}`))
            .then(() => window.location.reload());
    }

    render () {
        return (
            <ArtistForm
                initialValues={this.props.artist}
                onSubmit={this.onSubmit}
            />
        );
    }
}

export default withRouter(EditArtist);
