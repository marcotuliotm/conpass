import { mount } from 'enzyme';
import React from 'react';
import UserTable from './index';

describe('<UserTable />', () => {
  it('UserTable should be defined', () => {
    expect(UserTable).toBeDefined();
  });
  it('should have table when mount', () => {
    const wrapper = mount(<UserTable />);
    expect(wrapper.find('table').length).toBe(1);
  });
  it('should have two columns when mount', () => {
    const wrapper = mount(<UserTable />);
    expect(wrapper.find('th').length).toBe(2);
  });
  it('should have full name column when mount', () => {
    const wrapper = mount(<UserTable />);
    expect(wrapper.find('th').get(0).props.children.props.children[0]).toBe('Full Name');
  });
  it('should have full name column when mount', () => {
    const wrapper = mount(<UserTable />);
    expect(wrapper.find('th').get(1).props.children.props.children[0]).toBe('Created at');
  });
});

