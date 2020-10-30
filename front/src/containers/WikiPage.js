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
import getLetter from "../helpers/letters";


class WikiPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: null,
    };
  }

  static get defaultProps() {
    return {
      slug: '',
      error: null,
      html: null,
      getText: null,
    };
  }

  static get propTypes() {
    return {
      slug: PropTypes.string,
      error: PropTypes.string,
      html: PropTypes.string,
      getText: PropTypes.func,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      slug,
      getText,
    } = nextProps;

    if (prevState.slug !== slug) {
      getText(slug);
    }
    return { slug };
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
  getText: slug => dispatch(pageActions.getPageText(slug)),
});

const mapStateToProps = state => ({
  html: state.pages.html,
  error: state.pages.error,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WikiPage);
