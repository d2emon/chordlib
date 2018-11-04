import React, { Component, Fragment } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

class Artist extends Component {
    constructor (props) {
        super(props);

        const { match, } = props;

        this.state = {
            artist: match.params.artist,
            albums: [
                "Album 1",
                "Album 2",
                "Album 3",
                "Album 4",
                "Album 5",
                "Album 6",
                "Album 7",
                "Album 8",
                "Album 9",
                "Album 10",
                "Album 11",
                "Album 12",
            ]
        }

    }
    render () {
        return (
            <Fragment>
                <h1>{this.state.artist}</h1>
                <ListGroup>
                    {this.state.albums.map((value, index) => <ListGroupItem tag="a" href={"/album/" + value} key={index}>
                        {value}
                    </ListGroupItem> )}
                </ListGroup>
            </Fragment>
        );
    }
}

export default Artist;
