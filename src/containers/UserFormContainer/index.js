import React, { Component } from 'react';
import UserFormHeader from 'components/UserFormHeader';
import UserForm from 'components/UserForm';


class UserFormContainer extends Component {
  state = {
    disabled: true,
    formRef: {},
    companyName: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    repeat: '',
  };

  componentWillMount() {
    const userStorage = JSON.parse(window.localStorage.getItem('USER'));
    if (userStorage) {
      this.setState({ ...userStorage, disabled: false });
    }
  }

  onChange=() => {
    const { formRef } = this.state;
    formRef.validateAll(formRef.getValues(), true).then((res) => this.setState({ disabled: !res.isValid }));
  }

  onValidSubmit=(event, userRegister) => {
    window.localStorage.setItem('USER', JSON.stringify(userRegister));
    this.props.pushUploud();
  }

  setFormRef= (formRef) => {
    this.setState({ formRef });
  }

  render() {
    const { disabled, companyName, email, firstName, lastName, password, repeat } = this.state;
    return (
      <div>
        <UserFormHeader title="Register" />
        <UserForm
          onValidSubmit={this.onValidSubmit}
          disabled={disabled}
          setFormRef={this.setFormRef}
          onChange={this.onChange}
          companyName={companyName}
          email={email}
          firstName={firstName}
          lastName={lastName}
          password={password}
          repeat={repeat}
        />
      </div>
    );
  }
}


export default UserFormContainer;

