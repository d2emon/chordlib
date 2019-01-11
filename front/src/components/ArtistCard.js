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
import ArtistDescription from './ArtistDescription';
import ArtistWikiCard from './ArtistWikiCard';
import EditArtist from '../containers/EditArtist';

class ArtistCard extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab: 'view',
    };
  }

  static get defaultProps() {
    return {
      artist: null,
      wikipedia: null,
    };
  }

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
      wikipedia: PropTypes.shape({
        name: PropTypes.string,
        image: PropTypes.string,
        description: PropTypes.string,
      }),
    };
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
    const { activeTab } = this.state;
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
