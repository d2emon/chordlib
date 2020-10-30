import React from 'react';
import { connect } from 'react-redux';
import {
  Badge,
  Col,
  Row,
  Card,
  CardTitle,
  CardBody,
} from 'reactstrap';
import { getArtistsList } from '../../../actions/artistActions';
import getLetter from '../../../helpers/letters';
import { capitalize } from '../../../helpers/title';

const ArtistCard = ({ slug, name, unprocessed }) => (
  <a href={`/artist/${slug}`}>
    <Card className="my-1">
      <CardBody>
        <CardTitle>
          {name}
          {unprocessed && <Badge color="warning" pill>Необработан</Badge>}
        </CardTitle>
      </CardBody>
    </Card>
  </a>
);

const specialQueries = {
  other: {
    special: 'other',
  },
  0: {
    special: 'num',
  },
  all: {
    special: 'all',
  },
}

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
      letter: null,
      special: null,
      title: 'Исполнители',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const match = nextProps.match || {};
    const params = match.params || {};
    const {
      language,
      letter,
      special,
    } = params;

    const reload = (language !== prevState.language)
        || (letter !== prevState.letter)
        || (special !== prevState.special);
    if (reload) {
      const query = specialQueries[special];
      nextProps.fetchArtists(query || { letter: special });
    }

    return {
      language,
      letter,
      special,
      title: getLetter(params),
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>{capitalize(this.state.title || 'Исполнители')}</h1>
        <Row>
          {this.props.artists && this.props.artists.map((value, index) => (
            <Col
              key={index}
              md={3}
            >
              <ArtistCard {...value} />
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  artists: state.artists.artists,
  // title: state.artists.title,
  isLoad: state.artists.isLoad,
});

const mapDispatchToProps = dispatch => ({
  fetchArtists: query => dispatch(getArtistsList(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Artists);
