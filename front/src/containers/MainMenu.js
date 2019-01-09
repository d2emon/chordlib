import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import PagesDropdown from './PagesDropdown';
import config from '../config';

const SimpleItem = ({ title, link }) => (
  <NavItem>
    <NavLink tag={Link} to={link || '/'}>{title}</NavLink>
  </NavItem>
);

SimpleItem.defaultProps = {
  link: '/',
};

SimpleItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
};

const ComplexItem = ({ title, link, subPages }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>{title}</DropdownToggle>
    <DropdownMenu right>
      {
        link
        && (
          <Fragment>
            <DropdownItem tag={Link} to={link}>{title}</DropdownItem>
            <DropdownItem divider />
          </Fragment>
        )
      }
      { subPages.map(subPage => (
        <DropdownItem tag={Link} to={subPage.link || '/'} key={subPage.title}>
          {subPage.title}
        </DropdownItem>
      )) }
    </DropdownMenu>
  </UncontrolledDropdown>
);

ComplexItem.defaultProps = {
  link: '/',
  subPages: [],
};

ComplexItem.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  subPages: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string,
    }),
  ),
};

const MainMenu = () => {
  const links = config.pages;
  return (
    <Nav className="ml-auto" navbar>
      { links.map(page => (
        page.subPages
          ? <ComplexItem key={page.title} {...page} />
          : <SimpleItem key={page.title} {...page} />
      )) }
      <PagesDropdown />
    </Nav>
  );
};

export default MainMenu;
