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
  static get defaultProps() {
    return {
      artist: '',
      slug: '',
      error: null,
      page: null,
      getPage: null,
    };
  }

  static get propTypes() {
    return {
      artist: PropTypes.string,
      slug: PropTypes.string,
      error: PropTypes.string,
      page: PropTypes.shape({
        text: PropTypes.string,
      }),
      getPage: PropTypes.func,
    };
  }

  componentWillMount() {
    const { artist, slug, getArtistPage } = this.props;
    getArtistPage(artist, slug);
  }

  componentDidUpdate(prevProps) {
    const { slug, getArtistPage } = this.props;
    if (prevProps.slug !== slug) getArtistPage(slug);
  }

  render() {
    const { page, error } = this.props;
    console.log({ page, error });
    if (error) return <ErrorMessage error={error} />;
    if (!page) return <Loader />;
    // const text = page ? markdown.render(page.text).replace('{:subculture:}', 'SUBCULTURE') : null;
    const text = page.html;
    return (
      <Container>
        <Row>
          <Col>
            <TextCard
              className="m-1"
              text={text}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getArtistPage: (artist, slug) => dispatch(pageActions.getArtistPage(artist, slug)),
});

const mapStateToProps = state => ({
  page: state.pages.page,
  error: state.pages.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArtistPage);
