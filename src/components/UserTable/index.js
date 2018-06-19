import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';
import Avatar from 'react-avatar';


function UserTable(props) {
  const { data, handleChange } = props;
  let { sortedInfo } = props;
  sortedInfo = sortedInfo || {};
  const columns = [{
    title: 'Full Name',
    dataIndex: 'avatar',
    key: 'avatar.name',
    sorter: (a, b) => a.avatar.name.length - b.avatar.name.length,
    sortOrder: sortedInfo.columnKey === 'avatar' && sortedInfo.order,
    render: (avatar) => (<div>
      <Avatar
        round
        name={avatar.name}
        color="#d2d3d5"
        size="50px"
        src={avatar.src}
        fgColor="#555E5E"
      />{` ${avatar.name}`}</div>),
  }, {
    title: 'Created at',
    dataIndex: 'create',
    key: 'create',
    width: 180,
    sorter: (a, b) => a.create - b.create,
    sortOrder: sortedInfo.columnKey === 'create' && sortedInfo.order,
    render: (timemilli) => <h6>{moment(timemilli).format('D MMM, YYYY, h:mm')}</h6>,
  }];

  return (
    <div className="row align-items-center justify-content-center">
      <div className="col-10">
        <Table columns={columns} dataSource={data} onChange={handleChange} pagination={false} />
      </div>
    </div>
  );
}

UserTable.propTypes = {
  data: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  sortedInfo: PropTypes.object,
};

export default UserTable;
