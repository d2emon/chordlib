import React, { Component } from 'react';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

class Artists extends Component {
    constructor (props) {
        super(props);

        this.state = {
            artists: [
                "Artists 1",
                "Artists 2",
                "Artists 3",
                "Artists 4",
                "Artists 5",
                "Artists 6",
                "Artists 7",
                "Artists 8",
                "Artists 9",
                "Artists 10",
                "Artists 11",
                "Artists 12",
            ]
        }

    }
    render () {
        return (
            <ListGroup>
                {this.state.artists.map((value, index) => <ListGroupItem tag="a" href={"/artist/" + value} key={index}>
                    {value}
                </ListGroupItem> )}
            </ListGroup>
        );
    }
}

export default Artists;
