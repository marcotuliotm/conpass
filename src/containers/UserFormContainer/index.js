import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserFormHeader from 'components/UserFormHeader';


class UserFormContainer extends Component {
  state = {

  };

  render() {
    return (
      <div>
        <UserFormHeader title="Register" />
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

