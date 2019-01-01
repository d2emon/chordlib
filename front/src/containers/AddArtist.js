import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addArtist,
    validateArtist,
    getSlug,
} from '../actions/artistActions';
// import AddArtistForm from '../components/AddArtistForm';
import FormContainer from './FormContainer';

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

    onChange (values, dispatch, props, previousValues) {
        const name = values.name || this.state.name;
        if (name !== previousValues.name) {
            this.props.getSlug(name)
                .then(slug => this.updateArtist({ name, slug }));
        } else {
            values.name = name;
            this.updateArtist(values);
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
        /*
                name={this.state.name}
                slug={this.state.slug}
                validate={this.state.validate}
                formErrors={this.state.formErrors}
                onChange={this.onChange}
                onSubmit={this.saveArtist}

         */
        return (
            <FormContainer
                newSlug={this.state.slug}
                onChange={this.onChange}
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
