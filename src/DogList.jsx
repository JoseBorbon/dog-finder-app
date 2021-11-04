import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import './DogList.css';

export default class DogList extends Component {
  render() {
    const dogs = this.props.dogs.map(({ name, src }) => {
      return (
        <div className="Dog col-lg-4 text-center" key={uuid()}>
          <img src={src} alt={name} />
          <h3>
            <Link className="Dog-link" exact to={`/${name}`}>
              {name}
            </Link>
          </h3>
        </div>
      );
    });
    return (
      <div className="DogList">
        <div>
          <h1 className="display-1 text-center">Click A Dog!</h1>
          <div className="row">{dogs}</div>
        </div>
      </div>
    );
  }
}
