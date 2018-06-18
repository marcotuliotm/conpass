import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserTableHeader from 'components/UserTableHeader';
import UserTable from 'components/UserTable';
import UserTableContainer from './index';


describe('<UserTableContainer />', () => {
  const initialState = { users: {
    data: [],
    load: false,
  } };
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><UserTableContainer /></Provider>);
  });

  it('UserTableContainer should be defined', () => {
    expect(UserTableContainer).toBeDefined();
  });
  it('should have UserTableContainer tag when mount', () => {
    expect(wrapper.find(UserTableContainer).length).toEqual(1);
  });
  it('should have UserTableHeader tag when mount', () => {
    expect(wrapper.find(UserTableHeader).length).toEqual(1);
  });
  it('should have UserTable tag when mount', () => {
    expect(wrapper.find(UserTable).length).toEqual(1);
  });
});

