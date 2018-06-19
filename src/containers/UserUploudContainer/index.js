import React, { Component } from 'react';
import UserUploudHeader from 'components/UserUploudHeader';
import UserUploud from 'components/UserUploud';
import UserUploudFooter from 'components/UserUploudFooter';


class UserUploudContainer extends Component {
  state = {
    src: '',
  };

  onChange=() => {
    const { formRef } = this.state;
    formRef.validateAll(formRef.getValues(), true).then((res) => this.setState({ disabled: !res.isValid }));
  }

  onSubmit=() => {
    // // window.localStorage.setItem('USER', JSON.stringify(userRegister));
    // this.props.pushUploud();
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
        <UserUploudFooter />
      </div>
    );
  }
}


export default UserUploudContainer;

