import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  TabContent,
  TabPane,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Loader from './Loader';
import WikipediaButton from './WikipediaButton';
import ArtistDescription from './ArtistDescription';
import ArtistWikiCard from './ArtistWikiCard';
import EditArtist from '../containers/EditArtist';

class ArtistCard extends Component {
  constructor(props) {
    super(props);

    this.switchEdit = this.switchEdit.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: 'view',
      edit: false,
    };
  }

  static get defaultProps() {
    return {
      artist: null,
    };
  };

  static get propTypes() {
    return {
      artist: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
        unprocessed: PropTypes.bool,
        image: PropTypes.string,
        description: PropTypes.string,
        albums: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            slug: PropTypes.string,
          }),
        ),
        songs: PropTypes.arrayOf(
          PropTypes.shape({
            title: PropTypes.string,
            slug: PropTypes.string,
          }),
        ),
        pages: PropTypes.arrayOf(
          PropTypes.string,
        ),
      }),
    };
  };

  switchEdit() {
    const { edit } = this.state;
    this.setState({ edit: !edit });
  }

  toggle(tab) {
    const { activeTab } = this.state;
    if (activeTab === tab) return;
    this.setState({ activeTab: tab });
  }

  render() {
    const tabs = {
      view: <FontAwesome name="eye" />,
      songs: 'Песни',
      albums: 'Альбомы',
      pages: 'Статьи',
      edit: <FontAwesome name="edit" />,
      wiki: <FontAwesome name="wikipedia-w" />,

    };
    const { artist, wikipedia } = this.props;
    const { edit, activeTab } = this.state;
    if (!artist) return <Loader />;
    return (
      <Card>
        <CardHeader>
          <Navbar color="light" light expand="md">
            <NavbarBrand>
              <CardTitle>
                {artist.name}{' '}
                {artist.unprocessed && <Badge color="warning" pill>Необработан</Badge>}
              </CardTitle>
              {/* <CardSubtitle>{artist.slug}</CardSubtitle> */}
            </NavbarBrand>
            <Nav className="ml-auto" navbar tabs>
              <NavItem>
                <NavLink
                  className={activeTab === 'wiki' ? 'active' : ''}
                  onClick={() => { this.toggle('wiki'); }}
                >
                  <FontAwesome name="wikipedia-w" />
                </NavLink>
              </NavItem>
              <NavItem>
                <WikipediaButton
                  className={activeTab === 'wiki' ? 'active' : ''}
                  onClick={() => { this.toggle('wiki'); }}
                />
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'view' ? 'active' : ''}
                  onClick={() => { this.toggle('view'); }}
                >
                  <FontAwesome name="eye" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={activeTab === 'edit' ? 'active' : ''}
                  onClick={() => { this.toggle('edit'); }}
                >
                  <FontAwesome name="edit" />
                </NavLink>
              </NavItem>
              <NavItem>
                <Button color="link" onClick={this.switchEdit}>
                  <FontAwesome name={edit ? 'eye' : 'edit'} />
                </Button>
              </NavItem>
            </Nav>
          </Navbar>
        </CardHeader>
        <CardBody>
          <Nav tabs>
            {Object.keys(tabs).map(key => (
              <NavItem key={key}>
                <NavLink
                  className={activeTab === key ? 'active' : ''}
                  onClick={() => { this.toggle(key); }}
                >
                  {tabs[key]}
                </NavLink>
              </NavItem>
            ))}
          </Nav>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="view">
              <ArtistDescription artist={artist} />
            </TabPane>
            <TabPane tabId="songs">
              <Card>
                <CardHeader>
                  <Button href={`/artist/${artist.slug}/add-album/`}>Добавить песню</Button>
                </CardHeader>
                <ListGroup>
                  {artist.songs && artist.songs.map(value => (
                    <ListGroupItem
                      tag="a"
                      href={`/album/${artist.slug}/${value.slug}`}
                      key={value.slug}
                    >
                      {value.title}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </TabPane>
            <TabPane tabId="albums">
              <Card>
                <CardHeader>
                  <Button href={`/artist/${artist.slug}/add-album/`}>Добавить альбом</Button>
                </CardHeader>
                <ListGroup>
                  {artist.albums && artist.albums.map(value => (
                    <ListGroupItem
                      tag="a"
                      href={`/album/${artist.slug}/${value.slug}`}
                      key={value.slug}
                    >
                      {value.title}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </TabPane>
            <TabPane tabId="pages">
              <Card>
                <ListGroup>
                  {artist.pages && artist.pages.map(page => (
                    <ListGroupItem
                      tag="a"
                      href={`/artist/${artist.slug}/page/${page}`}
                      key={page}
                    >
                      {page}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Card>
            </TabPane>
            <TabPane tabId="wiki">
              {wikipedia && <ArtistWikiCard artist={wikipedia} />}
            </TabPane>
            <TabPane tabId="edit">
              <EditArtist artist={artist} />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}

export default ArtistCard;
