import React, { Component } from 'react';
import {
    // Badge,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import artists from '../database/artists'

class Artists extends Component {
    constructor (props) {
        super(props);

        this.state = {
            artists,
        }

    }
    render () {
        return (
            <ListGroup>
                {this.state.artists.map((value, index) => <ListGroupItem tag="a" href={"/artist/" + value} key={index}>
                    {value}
                    {/*artist.unadded && <Badge color="warning" pill>Необработан</Badge>*/}
                </ListGroupItem> )}
            </ListGroup>
        );
    }
}

export default Artists;
