import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import UserUploudHeader from './index';

describe('<UserUploudHeader />', () => {
  it('UserUploudHeader should be defined', () => {
    expect(UserUploudHeader).toBeDefined();
  });
  const wrapper = mount(
    <MemoryRouter initialEntries={['/uploud']}>
      <UserUploudHeader title="conpass" />
    </MemoryRouter>
  );

  it('should have title when mount', () => {
    expect(wrapper.find('h1').props().children).toBe('conpass');
  });
});
