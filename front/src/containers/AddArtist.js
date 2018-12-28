import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addArtist,
    validateArtist,
    getSlug,
} from '../actions/artistActions';
import AddArtistForm from '../components/AddArtistForm';

class Artists extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: '',
            slug: '',
            description: '',
            validate: {},
            formErrors: {},
        };

        this.saveArtist = this.saveArtist.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    updateArtist ({ name, slug }) {
        return this.props.validateArtist({ name, slug})
                .then(({ validate }) => this.setState({ name, slug, validate }));
    }

    onChange (artist) {
        const { name } = artist;
        if (name !== undefined) {
            this.props.getSlug(name)
                .then(slug => this.updateArtist({ name, slug }));
        } else {
            artist.name = name || this.state.name;
            console.log(artist);
            this.updateArtist(artist);
        }
    }

    saveArtist (artist) {
        this.props.validateArtist(artist)
            .then(({ validate }) => {
                if (validate.name && validate.slug) {
                    console.log(artist, this.props.artists);
                    // this.props.addArtist(artist);
                    alert(JSON.stringify(artist));
                }
            });
    }

    render () {
        return (
            <AddArtistForm
                name={this.state.name}
                slug={this.state.slug}
                validate={this.state.validate}
                formErrors={this.state.formErrors}
                onChange={this.onChange}
                onSubmit={this.saveArtist}
            />
        );
    }
}

const mapStateToProps = ({ artists }) => ({
    artists: artists.artists,
    artist: artists.artist,
    validate: artists.validate,
});

const mapDispatchToProps = dispatch => ({
    addArtist: (artist) => dispatch(addArtist(artist)),
    validateArtist: (artist) => dispatch(validateArtist(artist)),
    getSlug: (name) => dispatch(getSlug(name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Artists);
