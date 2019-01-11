import React, {Component, Fragment} from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import WikipediaButton from '../components/WikipediaButton';
// import ArtistWikiCard from '../components/ArtistWikiCard';
import ArtistForm from '../forms/ArtistForm';
import * as artistActions from '../actions/artistActions';

class EditArtist extends Component {
    constructor(props) {
        super(props);

        this.onWiki = this.onWiki.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillUpdate(nextProps) {
        const { artist, wikipedia } = nextProps;
        if (wikipedia && (wikipedia !== this.props.wikipedia)) {
            const { description } = wikipedia;
            // artist.name = name;
            artist.description = description;
        }
    }

    onWiki() {
        const { artist, findArtist } = this.props;
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
                <WikipediaButton onClick={this.onWiki} />
                {/* this.props.wikipedia && <ArtistWikiCard artist={this.props.wikipedia} /> */}
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
