import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { compose } from "redux";
import { connect } from 'react-redux';
// import { reduxForm, formValueSelector } from 'redux-form';
import {
    ListGroup,
    ListGroupItem,
    // Badge,
    Card,
    // CardImg,
    CardHeader,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,

    Navbar,
    NavbarBrand,
    Nav,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import markdown from '../helpers/markdown';
import EditAlbum from './EditAlbum';
import { getAlbum } from '../actions/albumActions';

class Album extends Component {
    constructor(props) {
        super(props);

        this.state = {
            artist: null,
            edit: false,
        };

        this.switchEdit = this.switchEdit.bind(this);
    }

    componentDidMount() {
        this.props.findAlbum(this.props.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.slug !== this.props.slug) this.props.findAlbum(nextProps.slug);
        if (!nextProps.isFetching) this.setState({ album: this.getAlbum(nextProps) });
    }

    getAlbum({ album, slug }) {
        if (album) return album;
        const title = slug.length > 0
            ? slug[0].toUpperCase() + slug.substring(1)
            : '';
        return {
            title,
            slug,
            unprocessed: true,
        };
    }

    switchEdit() {
        this.setState({ edit: !this.state.edit });
    }

    render() {
        const { album, edit } = this.state;
        if (!album) return (
            <h1>Идет загрузка...</h1>
        );
        return (
            <Card>
                <CardHeader>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand>
                            <CardTitle>
                                {album.title}
                                {/* artist.unprocessed && <Badge color="warning" pill>Необработан</Badge> */}
                            </CardTitle>
                            {album.author && <CardSubtitle>{album.author.name}</CardSubtitle>}
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
                            <EditAlbum album={album} />
                        </CardBody>
                    )
                    : (
                        <CardBody>
                            {/* <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */ }
                            {album.description && (
                                <CardText dangerouslySetInnerHTML={{__html: markdown.render(album.description)}} />
                            )}
                            <Card>
                                <CardHeader>
                                    <Button href={'/add-song'}>Добавить песню</Button>
                                </CardHeader>
                                <ListGroup>
                                    {album.songs.map((value, index) => (
                                        <ListGroupItem tag="a" href={`/song/${value.slug}`} key={index}>
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
    findAlbum: slug => dispatch(getAlbum(slug)),
});

const mapStateToProps = state => ({
    album: state.albums.album,
    isFetching: state.albums.isFetching,
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
)(Album);
