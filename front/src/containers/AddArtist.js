import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addArtist } from '../actions/artistActions';
import AddArtistForm from '../components/AddArtistForm';

class Artists extends Component {
    constructor (props) {
        super(props);

        this.saveArtist = this.saveArtist.bind(this);
    }

    saveArtist (artist) {
        console.log(artist, this.props.artists);
        this.props.addArtist(artist);
        alert(JSON.stringify(artist));
    }

    render () {
        return (
            <AddArtistForm
                onSubmit={this.saveArtist}
            />
        );
    }
}

const mapStateToProps = state => ({
    artists: state.artists,
});

const mapDispatchToProps = dispatch => ({
    addArtist: (artist) => dispatch(addArtist(artist)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Artists);
