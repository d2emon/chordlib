import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
} from 'reactstrap';
import { markdown } from 'markdown';
import * as pageActions from '../actions/pageActions';


class WikiPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: null,
    };
  }

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

  componentWillReceiveProps(nextProps) {
    const { page } = nextProps;
    this.setState({
      page: page ? markdown.toHTML(page.text) : null,
    });
  }

  render() {
    const { page } = this.state;
    if (!page) return <h1>Идет загрузка...</h1>;
    return (
      <Container>
        <Row>
          <Col>
            <Card dangerouslySetInnerHTML={{ __html: page }} />
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
