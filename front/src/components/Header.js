import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import config from '../config';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      title: config.title,
      links: config.pages,
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
    const { title, isOpen, links } = this.state;
    return (
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={Link} to="/">{title}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            { links.map((page, index) => (page.subpages
              ? (
                <UncontrolledDropdown nav inNavbar key={page.title}>
                  <DropdownToggle nav caret>
                    {page.title}
                  </DropdownToggle>
                  <DropdownMenu right>
                    { page.subpages.map((subpage, index) => (
                      <DropdownItem tag={Link} to={page.link || '/'} key={index}>
                        {subpage.title}
                      </DropdownItem>
                    )) }
                  </DropdownMenu>
                </UncontrolledDropdown>
              )
              : (
                <NavItem key={page.title}>
                  <NavLink tag={Link} to={page.link || '/'}>{page.title}</NavLink>
                </NavItem>
              ))) }
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
