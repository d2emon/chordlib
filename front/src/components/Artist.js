import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

class Artist extends Component {
    constructor (props) {
        super(props);

        this.state = {
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
            <ListGroup>
                {this.state.songs.map((value, index) => <ListGroupItem tag="a" href={"/song/" + value} key={index}>
                    {value}
                </ListGroupItem> )}
            </ListGroup>
        );
    }
}

export default Artist;
