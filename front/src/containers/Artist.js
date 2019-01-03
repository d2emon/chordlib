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
import { markdown } from 'markdown';
import FontAwesome from 'react-fontawesome';
import EditArtist from './EditArtist';
import { findArtist } from "../actions/artistActions";

class Artist extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: null,
            edit: false,
        };

        this.switchEdit = this.switchEdit.bind(this);
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

    switchEdit() {
        this.setState({ edit: !this.state.edit });
    }

    render() {
        const { artist, edit } = this.state;
        if (!artist) return (
            <h1>Идет загрузка...</h1>
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
                            <Button color="link" onClick={this.switchEdit}>
                                <FontAwesome name={edit ? 'eye' : 'edit'} />
                            </Button>
                        </Nav>
                    </Navbar>
                </CardHeader>
                {edit
                    ? (
                        <CardBody>
                            <EditArtist initialValues={artist} />
                        </CardBody>
                    )
                    : (
                        <CardBody>
                            {/* <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */ }
                            {artist.description && (
                                <CardText dangerouslySetInnerHTML={{__html: markdown.toHTML(artist.description)}} />
                            )}
                            <Card>
                                <CardHeader>
                                    <Button href={`/artist/${artist.slug}/add-album/`}>Добавить альбом</Button>
                                </CardHeader>
                                <ListGroup>
                                    {artist.albums.map((value, index) => (
                                        <ListGroupItem tag="a" href={`/album/${artist.slug}/${value.slug}`} key={index}>
                                            {value.title}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>
                            </Card>
                        </CardBody>
                    )
                }
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
