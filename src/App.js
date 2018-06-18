import React, { Component } from 'react';
import Header from 'components/Header';
import UserTableContainer from 'containers/UserTableContainer';

import './App.css';


class App extends Component {
  state={

  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid jumbotron">
          <UserTableContainer />
        </div>

      </div>
    );
  }
}

export default App;

