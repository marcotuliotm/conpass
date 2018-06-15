import React, { Component } from 'react';
import Header from 'components/Header';
import './App.css';
import 'vendor/bootstrap-grid.min.css';
import 'vendor/bootstrap.min.css';
import styled from 'styled-components';
import UserTableContainer from 'containers/UserTableContainer';

class App extends Component {
  state={

  }
  render() {
    return (
      <div>
        <Header />
        <div className="container jumbotron">
          <UserTableContainer />
        </div>

      </div>
    );
  }
}

export default App;

