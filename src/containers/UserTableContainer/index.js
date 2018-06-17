import React, { Component } from 'react';
import UserTableHeader from 'components/UserTableHeader';
import UserTable from 'components/UserTable';
const data = [{
  key: '1',
  name: 'John Brown',
  create: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  create: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  create: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  create: 32,
  address: 'London No. 2 Lake Park',
}];

class UserTableContainer extends Component {
  state = {
    sortedInfo: null,
  };


  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }
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
