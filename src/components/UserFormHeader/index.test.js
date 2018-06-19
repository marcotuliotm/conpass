import { mount } from 'enzyme';
import React from 'react';
import UserFormHeader from './index';

describe('<UserTableHeader />', () => {
  it('UserTableHeader should be defined', () => {
    expect(UserFormHeader).toBeDefined();
  });
  const wrapper = mount(<UserFormHeader title="Register" />);
  it('should have title when mount', () => {
    expect(wrapper.find('h1').props().children).toBe('Register');
  });
  it('should have step 1 when mount', () => {
    expect(wrapper.find('#stepUserFormHeader1')).toHaveLength(1);
  });
  it('should have step 2 when mount', () => {
    expect(wrapper.find('#stepUserFormHeader2')).toHaveLength(1);
  });
});

