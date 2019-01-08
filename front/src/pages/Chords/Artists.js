import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {
  ListGroup,
  ListGroupItem,
  Badge,
} from 'reactstrap';
import {
  fetchArtists,
} from '../../actions/artistActions';

const ArtistLink = ({ slug, name, unprocessed }) => (
  <ListGroupItem tag="a" href={`/artist/${slug}`}>
    {name}
    {unprocessed && <Badge color="warning" pill>Необработан</Badge>}
  </ListGroupItem>
);

class Artists extends Component {
  constructor(props) {
    super(props);

    const match = props.match || {};
    const params = match.params || {};
    this.state = {
      params,
    };
  }

  componentWillMount() {
    const { language, letter, special } = this.state.params;

    this.props.fetchArtists({ language, letter, special });
  }

  render() {
    return (
      <Fragment>
        {this.props.title && <h1>{this.props.title}</h1>}
        <ListGroup>
          {this.props.artists.map((value, index) => <ArtistLink key={index} {...value} />)}
        </ListGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  artists: state.artists.artists,
  title: state.artists.title,
  isLoad: state.artists.isLoad,
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: query => dispatch(fetchArtists(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Artists);
