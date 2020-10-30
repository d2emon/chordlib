import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
} from 'reactstrap';
import TextCard from '../components/TextCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import * as pageActions from '../actions/pageActions';


class ArtistPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artist: null,
      slug: null,
    };
  }

  static get defaultProps() {
    return {
      artist: '',
      slug: '',
      error: null,
      html: null,
      getArtistPageText: null,
    };
  }

  static get propTypes() {
    return {
      artist: PropTypes.string,
      slug: PropTypes.string,
      error: PropTypes.string,
      html: PropTypes.string,
      getArtistPageText: PropTypes.func,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      artist,
      slug,
      getArtistPageText,
    } = nextProps;

    if ((prevState.artist !== artist) || (prevState.slug !== slug)) {
      getArtistPageText(artist, slug);
    }
    return {
      artist,
      slug,
    };
  }

  render() {
    const {
      error,
      html,
    } = this.props;
    if (error) return <ErrorMessage error={error} />;
    if (!html) return <Loader />;
    return (
      <Container>
        <Row>
          <Col>
            <TextCard
              className="m-1"
              text={html}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtistPageText: (artist, slug) => dispatch(pageActions.getArtistPageText(artist, slug)),
});

const mapStateToProps = state => ({
  html: state.pages.html,
  error: state.pages.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistPage);
