import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ListGroup,
  ListGroupItem,
} from 'reactstrap';
import * as pageActions from '../actions/pageActions';


class PagesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pages: null,
    };
  }

  static get defaultProps() {
    return {
      pages: null,
      getPagesList: null,
    };
  }

  static get propTypes() {
    return {
      pages: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          link: PropTypes.string,
        }),
      ),
      getPagesList: PropTypes.func,
    };
  }

  componentWillMount() {
    const { getPagesList } = this.props;
    getPagesList();
  }

  render() {
    const { pages } = this.props;
    if (!pages) return <h1>Идет загрузка...</h1>;
    return (
      <ListGroup>
        { pages.map(page => (
          <ListGroupItem
            tag={Link}
            to={page.link}
            key={page.link}
          >
            {page.title}
          </ListGroupItem>
        )) }
      </ListGroup>

    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPagesList: slug => dispatch(pageActions.getPagesList(slug)),
});

const mapStateToProps = state => ({
  pages: state.pages.pages,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PagesList);
