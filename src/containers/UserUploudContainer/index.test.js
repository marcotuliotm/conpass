import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import UserUploudHeader from 'components/UserUploudHeader';
import UserUploudContainer from './index';


describe('<UserUploudContainer />', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <UserUploudContainer />
    </MemoryRouter>
  );


  it('UserUploudContainer should be defined', () => {
    expect(UserUploudContainer).toBeDefined();
  });
  it('should have UserFormContainer tag when mount', () => {
    expect(wrapper.find(UserUploudContainer).length).toEqual(1);
  });
  it('should have UserUploudHeader tag when mount', () => {
    expect(wrapper.find(UserUploudHeader).length).toEqual(1);
  });
});

