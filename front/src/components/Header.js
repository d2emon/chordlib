import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import MainMenu from '../containers/MainMenu';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  static get defaultProps() {
    return {
      title: 'Chordlib',
    };
  }

  static get propTypes() {
    return {
      title: PropTypes.string,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { title } = this.props;
    const { isOpen } = this.state;
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">{title}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <MainMenu />
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
