import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import {
    fetchArtists,
} from '../actions/artistActions';

const ArtistLink = ({ slug, name }) => (
    <ListGroupItem tag="a" href={"/artist/" + slug}>
        {name}
    </ListGroupItem>
);

class Artists extends Component {
    componentWillMount() {
        const { letter } = this.props.match.params;

        this.props.fetchArtists(letter);
    }

    render () {
        return (
            <Fragment>
                <h1>{this.props.letter}</h1>
                <ListGroup>
                    {this.props.artists.map((value, index) => <ArtistLink key={index} {...value} />)}
                </ListGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists.artists,
    letter: state.artists.letter,
    isLoad: state.artists.isLoad,
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: letter => dispatch(fetchArtists(letter)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Artists);
