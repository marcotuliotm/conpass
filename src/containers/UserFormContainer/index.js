import React, { Component } from 'react';
import UserFormHeader from 'components/UserFormHeader';
import UserForm from 'components/UserForm';


class UserFormContainer extends Component {
  state = {
    disabled: true,
    formRef: {},
  };

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
    const { disabled } = this.state;
    return (
      <div>
        <UserFormHeader title="Register" />
        <UserForm onValidSubmit={this.onValidSubmit} disabled={disabled} setFormRef={this.setFormRef} onChange={this.onChange} />
      </div>
    );
  }
}


export default UserFormContainer;

