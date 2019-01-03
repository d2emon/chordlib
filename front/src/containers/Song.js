import React, { Component } from 'react';
// import { withRouter } from 'react-router-dom';
// import { compose } from "redux";
import { connect } from 'react-redux';
// import { reduxForm, formValueSelector } from 'redux-form';
import {
    // ListGroup,
    // ListGroupItem,
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
import { markdown } from 'markdown';
import FontAwesome from 'react-fontawesome';
import EditSong from './EditSong';
import { findSong } from '../actions/songActions';

class Song extends Component {
    constructor(props) {
        super(props);

        this.state = {
            song: null,
            edit: false,
        };

        this.switchEdit = this.switchEdit.bind(this);
    }

    componentDidMount() {
        this.props.findSong(this.props.slug);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.slug !== this.props.slug) this.props.findSong(nextProps.slug);
        if (!nextProps.isFetching) this.setState({ song: this.getSong(nextProps) });
    }

    getSong({ song, slug }) {
        if (song) return song;
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
        const { song, edit } = this.state;
        if (!song) return (
            <h1>Идет загрузка...</h1>
        );
        return (
            <Card>
                <CardHeader>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand>
                            <CardTitle>
                                {song.title}
                                {/* song.unprocessed && <Badge color="warning" pill>Необработан</Badge> */}
                            </CardTitle>
                            {song.author && <CardSubtitle>{song.author.name}</CardSubtitle>}
                            {song.album && <CardSubtitle>{song.album.title}</CardSubtitle>}
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
                            <EditSong song={song} />
                        </CardBody>
                    )
                    : (
                        <CardBody>
                            {/* <CardImg top width="50%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" /> */ }
                            {song.description && (
                                <CardText dangerouslySetInnerHTML={{__html: markdown.toHTML(song.description)}} />
                            )}
                            <Card>
                                {/*<CardHeader>
                                    <Button href={`/artist/${artist.slug}/add-album/`}>Добавить альбом</Button>
                                </CardHeader>*/}
                                {/*<ListGroup>
                                    {artist.albums.map((value, index) => (
                                        <ListGroupItem tag="a" href={`/album/${artist.slug}/${value.slug}`} key={index}>
                                            {value.title}
                                        </ListGroupItem>
                                    ))}
                                </ListGroup>*/}
                                {/*<ListGroup>
                                    {this.state.songs.map((value, index) => <ListGroupItem tag="a" href={"/song/" + value} key={index}>
                                        {value}
                                    </ListGroupItem> )}
                                </ListGroup>*/}
                            </Card>
                        </CardBody>
                    )
                }
            </Card>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    findSong: slug => dispatch(findSong(slug)),
});

const mapStateToProps = state => ({
    song: state.songs.song,
    isFetching: state.songs.isFetching,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Song);
