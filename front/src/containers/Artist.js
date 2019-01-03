import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { compose } from "redux";
import { connect } from 'react-redux';
// import { reduxForm, formValueSelector } from 'redux-form';
import {
    ListGroup,
    ListGroupItem,
    Badge,
    Card,
    // CardImg,
    CardHeader,
    CardBody,
    CardTitle,
    // CardSubtitle,
    CardText,
    Button,

    Navbar,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import EditArtist from './EditArtist';
import { findArtist } from "../actions/artistActions";

class Artist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: null,
            edit: false,
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
            ],
        };

        this.editArtist = this.editArtist.bind(this);
    }

    componentDidMount() {
        this.props.findArtist(this.props.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.slug !== this.props.slug) this.props.findArtist(nextProps.slug);
        if (!nextProps.isFetching) this.setState({ artist: this.getArtist(nextProps) });
    }

    getArtist({ artist, slug }) {
        if (artist) return artist;
        const name = slug.length > 0
            ? slug[0].toUpperCase() + slug.substring(1)
            : '';
        return {
            name,
            slug,
            unprocessed: true,
        };
    }

    editArtist() {
        this.setState({ edit: true });
    }

    render() {
        const { artist, edit } = this.state;
        if (!artist) return (
            <h1>Идет загрузка...</h1>
        );
        if (edit) return (
            <EditArtist initialValues={artist} />
        );
        return (
            <Card>
                <CardHeader>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand>
                            <CardTitle>
                                {artist.name}
                                {artist.unprocessed && <Badge color="warning" pill>Необработан</Badge>}
                            </CardTitle>
                            {/* <CardSubtitle>{artist.slug}</CardSubtitle> */}
                        </NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <Button color="link" onClick={this.editArtist}><FontAwesome name="edit" /></Button>
                        </Nav>
                    </Navbar>
                </CardHeader>
                <CardBody>
                    {/* <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */ }
                    {artist.description && (
                        <CardText>
                            {artist.description}
                        </CardText>
                    )}
                    <ListGroup>
                        {this.state.albums.map((value, index) => <ListGroupItem tag="a" href={"/album/" + value} key={index}>
                            {value}
                        </ListGroupItem> )}
                    </ListGroup>
                </CardBody>
            </Card>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    findArtist: artistUrl => dispatch(findArtist(artistUrl)),
});

const mapStateToProps = state => ({
    artist: state.artists.artist,
    isFetching: state.artists.isFetching,
});

/*
export default compose(
    withRouter,
    reduxForm(formConfiguration),
    connect(mapStateToProps),
)(AddArtist);
 */

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Artist);
