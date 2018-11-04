import React, { Component } from 'react';
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
        this.props.fetchArtists();
    }

    render () {
        return (
            <ListGroup>
                {this.props.artists.map((value, index) => <ArtistLink key={index} {...value} />)}
            </ListGroup>
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists.artists,
    isLoad: state.artists.isLoad,
});

const mapDispatchToProps = dispatch => ({
    fetchArtists: () => dispatch(fetchArtists()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Artists);
