import React from 'react';
import { NavItem } from '../typings/nav/NavItem';
import { NavItemLinks } from '../typings/nav/NavItemLinks';
import { HOME_PAGE, HAMMER_PATTERN_PAGE } from '../util/Constants';
import {NavDropdown} from './NavDropdown';
import NavLogo from './NavLogo';

function NavMenu() {
  const navLinks: NavItemLinks[] = [
    {name: "Hammer Pattern", link:"link-1", page: HAMMER_PATTERN_PAGE},
    {name: "Name-2 uk-active", link:"link-2", page: HOME_PAGE},
    {name: "Name-3", link:"link-3", page: HOME_PAGE},
    {name: "Name-4", link:"link-4", page: "Name-4"},
  ]

  return (
    <nav className="uk-navbar-container">
      <div className="uk-navbar">
        <div className="uk-navbar-left">
          <NavDropdown name='Candles Stick Patterns' links={navLinks}/>
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
