import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import UserFormHeader from 'components/UserFormHeader';
import UserForm from 'components/UserForm';
import UserFormContainer from './index';


describe('<UserFormContainer />', () => {
  // browser mocks
  const localStorageMock = (function () {
    let store = {};
    return {
      getItem(key) {
        return store[key] || null;
      },
      setItem(key, value) {
        store[key] = value.toString();
      },
      removeItem(key) {
        delete store[key];
      },
      clear() {
        store = {};
      },
    };
  }());

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });
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
  it('should have UserForm tag when mount', () => {
    expect(wrapper.find(UserForm).length).toEqual(1);
  });
});

