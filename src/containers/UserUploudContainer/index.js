import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import UserUploudHeader from 'components/UserUploudHeader';
import UserUploud from 'components/UserUploud';
import UserUploudFooter from 'components/UserUploudFooter';

import { UserAction } from 'actions/user';


class UserUploudContainer extends Component {
  state = {
    src: '',
  };

  handleSubmit=() => {
    const { src } = this.state;
    const userStorage = JSON.parse(window.localStorage.getItem('USER'));
    userStorage.avatar = {
      name: `${userStorage.firstName} ${userStorage.lastName}`,
      src,
    };
    userStorage.create = Date.now();
    userStorage.key = Date.now();
    this.props.createUser(userStorage);
    this.props.pushTable();
  }

  handleFiles= (file) => {
    this.setState({ src: file.base64 });
  }

  render() {
    const { src } = this.state;
    return (
      <div>
        <UserUploudHeader title="Profile photo" />
        <UserUploud handleFiles={this.handleFiles} src={src} />
        <UserUploudFooter handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createUser: (data) => dispatch(UserAction.saveUser(data)),
  };
}

export default withRouter(connect(
  null,
  mapDispatchToProps,
)(UserUploudContainer));

