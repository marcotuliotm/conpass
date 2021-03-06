import { mount } from 'enzyme';
import React from 'react';
import UserTable from './index';

const store = {
  users: {
    data: [{
      key: '1',
      avatar: {
        name: 'John Brown',
        src: '',
      },
      create: 1229274074002,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      avatar: {
        name: 'Jim Green',
        src: 'http://www.gravatar.com/avatar/a16a38cdfe8b2cbd38e8a56ab93238d3',
      },
      create: 1529274074002,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      avatar: {
        name: 'Moe Black',
        src: '',
      },
      create: 1329274076002,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      avatar: {
        name: 'Jim Red',
        src: '',
      },
      create: 1529274075002,
      address: 'London No. 2 Lake Park',
    }],
    load: false,
  },
};

describe('<UserTable />', () => {
  it('UserTable should be defined', () => {
    expect(UserTable).toBeDefined();
  });
  const wrapper = mount(<UserTable data={[]} handleChange={jest.fn()} />);
  it('should have table when mount', () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });
  it('should have two columns when mount', () => {
    expect(wrapper.find('.ant-table-column-has-filters')).toHaveLength(2);
  });
  it('should have full name column when mount', () => {
    expect(wrapper.find('.ant-table-column-has-filters span').at(0).props().children[0]).toEqual('Full Name');
  });
  it('should have Created at column when mount', () => {
    expect(wrapper.find('.ant-table-column-has-filters').at(1).props().children.props.children[0]).toEqual('Created at');
  });
  const sortedInfo = {
    order: 'descend',
    columnKey: 'create',
  };
  const wrapperData = mount(<UserTable sortedInfo={sortedInfo} data={store.users.data} handleChange={jest.fn()} />);
  it('with 4 to data  when mount', () => {
    expect(wrapperData.find('.sb-avatar')).toHaveLength(4);
  });
  it('with 3 avatar text  when mount', () => {
    expect(wrapperData.find('.sb-avatar__text')).toHaveLength(3);
  });
  it('with 1 avatar image  when mount', () => {
    expect(wrapperData.find('.sb-avatar__image')).toHaveLength(1);
  });
  it('order desc by create at when mount', () => {
    expect(wrapperData.find('h6').at(0).props().children).toEqual('17 Jun, 2018, 7:21');
  });
  it('order asc by create at when mount', () => {
    const sortedAscCreat = {
      order: 'ascend',
      columnKey: 'create',
    };
    const wrapperAscCreate = mount(<UserTable sortedInfo={sortedAscCreat} data={store.users.data} handleChange={jest.fn()} />);
    expect(wrapperAscCreate.find('h6').at(0).props().children).toEqual('14 Dec, 2008, 3:01');
  });
});

