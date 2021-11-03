import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

class Nav extends Component {
  render() {
    const dogs = this.props.dogs.map(({ name }) => {
      return (
        <li className="nav-item" key={uuid()}>
          <NavLink className="nav-link" exact to={`/${name}`}>
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
          <NavLink className="navbar-brand" exact to="/">
            Dog Shelter
          </NavLink>
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
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
              </li>
              {dogs}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
