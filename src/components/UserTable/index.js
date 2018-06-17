import React from 'react';
import { Table } from 'antd';
import moment from 'moment';


function UserTable(props) {
  let { sortedInfo } = props;
  sortedInfo = sortedInfo || {};
  const columns = [{
    title: 'Full Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    render: (text) => <a href="#">{text}</a>,
  }, {
    title: 'Created at',
    dataIndex: 'create',
    key: 'create',
    width: 180,
    sorter: (a, b) => a.create - b.create,
    sortOrder: sortedInfo.columnKey === 'create' && sortedInfo.order,
    render: (timemilli) => <h6>{moment(timemilli).format(' D MMM, YYYY, h:mm')}</h6>,
  }];

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-10">
        <Table columns={columns} dataSource={props.data} onChange={props.handleChange} pagination={false} />
      </div>
    </div>
  );
}

export default UserTable;
