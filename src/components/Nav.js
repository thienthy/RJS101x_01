import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
    render() {
        return (
            <div>
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/main">Main</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/test">Test</NavLink>
            </div>
        )
    }
}

export default Nav;
