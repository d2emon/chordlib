import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {
  Button,
} from 'reactstrap';
import ArtistForm from '../forms/ArtistForm';
import * as artistActions from '../actions/artistActions';

import wikipediaLogo from '../assets/wikipedia.svg';

class EditArtist extends Component {
    constructor(props) {
        super(props);

        this.onWiki = this.onWiki.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        const { artist, wikipedia } = nextProps;
        console.log(wikipedia);
        if (wikipedia) {
            const { name, description } = wikipedia;
            console.log(artist, { name, description });
            artist.name = name;
            artist.description = description;
        }
    }

    onWiki() {
        const { artist, findArtist } = this.props;
        console.log(encodeURIComponent(artist.name));
        findArtist(encodeURIComponent(artist.name));
    }

    onSubmit (values) {
        const { updateArtist, history } = this.props;
        updateArtist(values)
            .then(() => history.push(`/artist/${values.slug}`))
            .then(() => window.location.reload());
    }

    render () {
        return (
            <Fragment>
                <Button onClick={this.onWiki}>
                    <img src={wikipediaLogo} width="32" alt="wikipedia" /> Wikipedia
                </Button>
                <ArtistForm
                  initialValues={this.props.artist}
                  onSubmit={this.onSubmit}
                />
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
  wikipedia: state.artists.wikipedia,
  // isFetching: state.artists.isFetching,
});

const mapDispatchToProps = dispatch => ({
  updateArtist: values => dispatch(artistActions.updateArtist(values)),
  findArtist: name => dispatch(artistActions.findInWikipedia(name)),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(EditArtist);
