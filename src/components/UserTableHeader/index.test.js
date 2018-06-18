import { mount } from 'enzyme';
import React from 'react';
import UserTableHeader from './index';

describe('<UserTableHeader />', () => {
  it('UserTableHeader should be defined', () => {
    expect(UserTableHeader).toBeDefined();
  });
  it('should have title when mount', () => {
    const wrapper = mount(<UserTableHeader title="conpass" />);
    expect(wrapper.find('h1').props().children).toBe('conpass');
  });
  it('should have button when mount', () => {
    const wrapper = mount(<UserTableHeader title="conpass" />);
    expect(wrapper.find('a').props().children).toBe('Add new user');
  });
});

