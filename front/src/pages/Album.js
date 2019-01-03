import React, { Component, Fragment } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

class Album extends Component {
    constructor (props) {
        super(props);

        const { match, } = props;

        this.state = {
            album: match.params.album,
            artist: match.params.artist,
            songs: [
                "Songs 1",
                "Songs 2",
                "Songs 3",
                "Songs 4",
                "Songs 5",
                "Songs 6",
                "Songs 7",
                "Songs 8",
                "Songs 9",
                "Songs 10",
                "Songs 11",
                "Songs 12",
            ]
        }

    }
    render () {
        return (
            <Fragment>
                <h1>{this.state.album}</h1>
                <h2>{this.state.artist}</h2>
                <ListGroup>
                    {this.state.songs.map((value, index) => <ListGroupItem tag="a" href={"/song/" + value} key={index}>
                        {value}
                    </ListGroupItem> )}
                </ListGroup>
            </Fragment>
        );
    }
}

export default Album;
