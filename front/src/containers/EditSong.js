import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SongForm from '../forms/SongForm';
import { updateSong } from '../actions/songActions';

class EditSong extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (values, dispatch) {
        dispatch(updateSong(values))
            .then(() => this.props.history.push(`/song/${values.slug}`))
            .then(() => window.location.reload());
    }

    render () {
        return (
            <SongForm
                initialValues={this.props.song}
                onSubmit={this.onSubmit}
            />
        );
    }
}

export default withRouter(EditSong);
