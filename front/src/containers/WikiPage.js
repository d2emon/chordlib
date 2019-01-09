import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
} from 'reactstrap';
import markdown from '../helpers/markdown';
import * as pageActions from '../actions/pageActions';


class WikiPage extends Component {
  static get defaultProps() {
    return {
      slug: '',
      page: null,
      getPage: null,
    };
  }

  static get propTypes() {
    return {
      slug: PropTypes.string,
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
    const { page } = this.props;
    if (!page) return <h1>Идет загрузка...</h1>;
    const text = page ? markdown.render(page.text) : null;
    return (
      <Container>
        <Row>
          <Col>
            <Card dangerouslySetInnerHTML={{ __html: text }} />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WikiPage);
