import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import UserTableContainer from 'containers/UserTableContainer';
import UserFormContainer from 'containers/UserFormContainer';

import './App.css';


class App extends Component {
  state={

  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid jumbotron">
          <Switch>
            <Route
              exact
              path="/"
              component={UserTableContainer}
            />
            <Route
              exact
              path="/new"
              component={UserFormContainer}
            />
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;

