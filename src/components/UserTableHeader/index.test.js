import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import UserTableHeader from './index';

describe('<UserTableHeader />', () => {
  it('UserTableHeader should be defined', () => {
    expect(UserTableHeader).toBeDefined();
  });
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <UserTableHeader title="conpass" />
    </MemoryRouter>
  );

  it('should have title when mount', () => {
    expect(wrapper.find('h1').props().children).toBe('conpass');
  });
  it('should have button when mount', () => {
    expect(wrapper.find('a').props().children).toBe('Add new user');
  });
});

