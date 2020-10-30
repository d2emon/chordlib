import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from 'reactstrap';
import * as pageActions from '../actions/pageActions';


class PagesDropdown extends Component {
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
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>Разное</DropdownToggle>
        <DropdownMenu right>
          <DropdownItem tag={Link} to="/list-pages">Вики-страницы</DropdownItem>
          {
            pages
            && (
              <Fragment>
                <DropdownItem divider />
                { pages.map(page => (
                  <DropdownItem
                    tag={Link}
                    to={page.link || '/'}
                    key={page.link}
                  >
                    {page.title}
                  </DropdownItem>
                )) }
              </Fragment>
            )
          }
        </DropdownMenu>
      </UncontrolledDropdown>
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
)(PagesDropdown);
