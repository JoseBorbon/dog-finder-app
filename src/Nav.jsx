import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

class Nav extends Component {
  render() {
    const dogLinks = this.props.dogs.map(({ name }) => {
      return (
        <li className="nav-item" key={uuid()}>
          <NavLink exact to={`/dogs/${name}`} className="nav-link">
            {name}
          </NavLink>
        </li>
      );
    });

    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: '#282A35' }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/dogs">
            Dog Shelter
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink exact to="/dogs" className="nav-link">
                  Home
                </NavLink>
              </li>
              {dogLinks}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
