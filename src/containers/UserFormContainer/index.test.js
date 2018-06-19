import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import UserFormHeader from 'components/UserFormHeader';
import UserFormContainer from './index';


describe('<UserFormContainer />', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={['/']}>
      <UserFormContainer />
    </MemoryRouter>
  );


  it('UserFormContainer should be defined', () => {
    expect(UserFormContainer).toBeDefined();
  });
  it('should have UserFormContainer tag when mount', () => {
    expect(wrapper.find(UserFormContainer).length).toEqual(1);
  });
  it('should have UserFormHeader tag when mount', () => {
    expect(wrapper.find(UserFormHeader).length).toEqual(1);
  });
});

