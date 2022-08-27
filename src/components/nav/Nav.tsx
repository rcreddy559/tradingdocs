import React from 'react';
import { NavItem } from '../typings/nav/NavItem';
import { NavItemLinks } from '../typings/nav/NavItemLinks';
import { HOME_PAGE } from '../util/Constants';
import {NavDropdown} from './NavDropdown';
import NavLogo from './NavLogo';

function Nav() {
  const navLinks: NavItemLinks[] = [
    {name: "Name-1", link:"link-1", page: HOME_PAGE},
    {name: "Name-2 uk-active", link:"link-2", page: HOME_PAGE},
    {name: "Name-3", link:"link-3", page: HOME_PAGE},
    {name: "Name-4", link:"link-4", page: "Name-4"},
  ]

  return (
    <nav className="uk-navbar-container uk-margin" uk-navbar>
      <div className="uk-navbar">
        <div className="uk-navbar-left">
          <img src='./logo192.png' width="50px" />
          <NavLogo />
          <NavDropdown name='Candles' links={navLinks}/>
        </div>
        <div className="uk-navbar-right">

          <div className="uk-navbar-item">
            <form action="javascript:void(0)">
              <input className="uk-input uk-form-width-small" type="text" placeholder="Input" />
              <button className="uk-button uk-button-default">Button</button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
