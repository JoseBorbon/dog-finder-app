import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';

export default class Routes extends Component {
  render() {
    const getDog = (props) => {
      let currentDog = this.props.dogs.find(
        (dog) =>
          dog.name.toLowerCase() === props.match.params.name.toLowerCase()
      );

      return <DogDetails {...props} dog={currentDog} />;
    };
    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect exact to="/dogs" />
      </Switch>
    );
  }
}
