import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserFormHeader from 'components/UserFormHeader';
import UserForm from 'components/UserForm';


class UserFormContainer extends Component {
  state = {
    disabled: true,
    formRef: {},
  };

  onKeyDown=() => {
    const { formRef } = this.state;
    formRef.validateAll(formRef.getValues(), true).then((res) => this.setState({ disabled: !res.isValid }));
  }

  onValidSubmit=(event, userRegister) => console.log(userRegister);

  setFormRef= (formRef) => {
    this.setState({ formRef });
  }

  render() {
    const { disabled } = this.state;
    return (
      <div>
        <UserFormHeader title="Register" />
        <UserForm onValidSubmit={this.onValidSubmit} disabled={disabled} setFormRef={this.setFormRef} onChange={this.onKeyDown} />
      </div>
    );
  }
}

function mapStateToProps({
  users,
}) {
  return {
    users,
  };
}


export default connect(
  mapStateToProps,
  null,
)(UserFormContainer);

