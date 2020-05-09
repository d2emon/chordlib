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
import {
  getArtistsByLetter,
  getArtistsList,
} from '../../../actions/artistActions';
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

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: null,
      letter: null,
      special: null,
      title: 'TITLE',
    };
  }

  updateParams() {
    const match = this.props.match || {};
    const params = match.params || {};
    const {
      language,
      letter,
      special,
    } = params;
    /*
    this.setState({
      language: params.language,
      letter: params.letter,
      special: params.special,
    })
     */
    if (language && letter) {
      this.setState({ title: getLetter(language, letter) });
      this.props.fetchArtistsByLetter({ language, letter });
    } else {
      this.setState({ title: special });
      this.props.fetchArtists(special);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match !== prevProps.match) {
      this.updateParams();
    }
  }

  componentWillMount() {
    this.updateParams()
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
  fetchArtistsByLetter: query => dispatch(getArtistsByLetter(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Artists);
