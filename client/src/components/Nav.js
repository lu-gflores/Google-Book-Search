import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
    return (
      <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to="/">Google Books</NavLink>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className={window.location.pathname === '/search' ? 'nav-link active' : 'nav-link active'} to="/search" >Search</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className={window.location.pathname === '/search' ? 'nav-link active' : 'nav-link active'} to="/saved" >Saved</NavLink>
            </li>
        </ul>
      </nav>
    )
}

export default Nav
