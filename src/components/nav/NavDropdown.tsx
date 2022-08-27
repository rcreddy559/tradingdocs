import { useContext } from 'react';
import { TradingDocsContext } from '../hooks/context/TradingDocsProvider';
import { NavItem } from '../typings/nav/NavItem';

export const NavDropdown = ({ name, links }: NavItem) => {
    const { SetCurrentPage, currentPage } = useContext(TradingDocsContext);

    return <div className="uk-navbar-item">
        <button className="uk-button uk-button-default" type="button">{name}</button>
        <div uk-dropdown="animation: slide-top; animate-out: true; duration: 700">
            <ul className="uk-nav uk-dropdown-nav">
                {links.map(link => <li style={{ color: currentPage === link.page ? "blue" : "" }}><a onClick={() => SetCurrentPage(link.name)}>{link.name}</a></li>)}
            </ul>
        </div>
    </div>
}

