import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserTableHeader from 'components/UserTableHeader';
import UserTable from 'components/UserTable';


class UserTableContainer extends Component {
  state = {
    sortedInfo: {
      order: 'descend',
      columnKey: 'create',
    },
  };


  handleChange = (pagination, filters, sorter) => {
    this.setState({
      sortedInfo: sorter,
    });
  }

  render() {
    return (
      <div>
        <UserTableHeader title="Users" />
        <UserTable data={this.props.users.data} handleChange={this.handleChange} sortedInfo={this.state.sortedInfo} />
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


export default withRouter(connect(
  mapStateToProps,
  null,
)(UserTableContainer));

