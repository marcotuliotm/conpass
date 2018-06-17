import React, { Component } from 'react';
import UserTableHeader from 'components/UserTableHeader';
import UserTable from 'components/UserTable';
const data = [{
  key: '1',
  name: {
    text: 'John Brown',
    avatar: '',
  },
  create: 1229274074002,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: {
    text: 'Jim Green',
    avatar: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
  },
  create: 1529274074002,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: {
    text: 'Joe Black',
    avatar: '',
  },
  create: 1329274076002,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: {
    text: 'Jim Red',
    avatar: '',
  },
  create: 1529274075002,
  address: 'London No. 2 Lake Park',
}];

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
        <UserTable data={data} handleChange={this.handleChange} sortedInfo={this.state.sortedInfo} />
      </div>
    );
  }
}

export default UserTableContainer;
