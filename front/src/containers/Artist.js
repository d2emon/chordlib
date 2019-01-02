import React, { Component, Fragment } from 'react';
// import { withRouter } from 'react-router-dom';
// import { compose } from "redux";
// import { connect } from 'react-redux';
// import { reduxForm, formValueSelector } from 'redux-form';
import {
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import AddArtistForm from '../forms/AddArtistForm';
import { validateArtist, getSlug, addArtist } from "../actions/artistActions";

class Artist extends Component {
    constructor(props) {
        super(props);

        this.state = {
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
        };

        // this.onSubmit = this.onSubmit.bind(this);
    }

    render () {
        return (
            <Fragment>
                <h1>{this.props.artist}</h1>
                <ListGroup>
                    {this.state.albums.map((value, index) => <ListGroupItem tag="a" href={"/album/" + value} key={index}>
                        {value}
                    </ListGroupItem> )}
                </ListGroup>
            </Fragment>
        );
    }
}

/*
export default compose(
    withRouter,
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(AddArtist);
 */

export default Artist;
