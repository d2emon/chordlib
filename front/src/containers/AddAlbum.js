import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AlbumForm from '../forms/AlbumForm';
import { addAlbum } from '../actions/albumActions';

class AddAlbum extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (values, dispatch) {
        const author = values.author
            ? values.author + '/'
            : '';
        dispatch(addAlbum(values))
            .then(() => this.props.history.push(`/album/${author}${values.slug}`))
            .then(() => window.location.reload());
    }

    render () {
        return (
            <AlbumForm
                initialValues={this.props.album}
                onSubmit={this.onSubmit}
            />
        );
    }
}

export default withRouter(AddAlbum);
