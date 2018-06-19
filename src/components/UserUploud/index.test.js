import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import ReactFileReader from 'react-file-reader';
import UserUploud from './index';

describe('<UserUploudHeader />', () => {
  it('UserUploudHeader should be defined', () => {
    expect(UserUploud).toBeDefined();
  });
  const wrapper = mount(
    <MemoryRouter initialEntries={['/uploud']}>
      <UserUploud handleFiles={jest.fn()} />
    </MemoryRouter>
  );

  it('should have ReactFileReader when mount', () => {
    expect(wrapper.find(ReactFileReader)).toHaveLength(1);
  });
});
