import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import MainMenu from '../containers/MainMenu';
import config from '../config';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      title: config.title,
      isOpen: false,
    };
  }

  toggle() {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { title, isOpen } = this.state;
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
