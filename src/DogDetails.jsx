import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './DogDetails.css';

export default class DogDetails extends Component {
  render() {
    const { name, age, facts, src } = this.props.dog;
    const dogFacts = facts.map((fact) => (
      <li className="list-group-item">{fact}</li>
    ));
    return (
      <div className="container">
        <div className="DogDetails row justify-content-center mt-3">
          <div className="col-3">
            <div className="card card-dog">
              <img src={src} className="card-img-top" alt={`my dog ${name}`} />
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4 className="card-subtitle text-muted">{`${age} years old`}</h4>
              </div>
              <ul className="list-group list-group-flush">{dogFacts}</ul>
              <div className="card-body">
                <Link exact to="/" className="btn btn-primary">
                  Go Back!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
