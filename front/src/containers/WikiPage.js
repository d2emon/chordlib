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


class WikiPage extends Component {
  static get defaultProps() {
    return {
      slug: '',
      error: null,
      page: null,
      getPage: null,
    };
  }

  static get propTypes() {
    return {
      slug: PropTypes.string,
      error: PropTypes.string,
      page: PropTypes.shape({
        text: PropTypes.string,
      }),
      getPage: PropTypes.func,
    };
  }

  componentWillMount() {
    const { slug, getPage } = this.props;
    getPage(slug);
  }

  componentDidUpdate(prevProps) {
    const { slug, getPage } = this.props;
    if (prevProps.slug !== slug) getPage(slug);
  }

  render() {
    const { page, error } = this.props;
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
  getPage: slug => dispatch(pageActions.getPage(slug)),
});

const mapStateToProps = state => ({
  page: state.pages.page,
  error: state.pages.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WikiPage);
