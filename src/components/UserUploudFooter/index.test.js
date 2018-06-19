import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import UserUploudFooter from './index';

describe('<UserUploudFooter />', () => {
  it('UserUploudFooter should be defined', () => {
    expect(UserUploudFooter).toBeDefined();
  });
  const wrapper = mount(
    <MemoryRouter initialEntries={['/uploud']}>
      <UserUploudFooter handleSubmit={jest.fn()} />
    </MemoryRouter>
  );

  it('should have link back when mount', () => {
    expect(wrapper.find('a').props().children).toBe('< Back');
  });
  it('should have button finishi when mount', () => {
    expect(wrapper.find('button').props().children).toBe('FINISHI >');
  });
});
