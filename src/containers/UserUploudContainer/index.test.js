import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import UserUploudHeader from 'components/UserUploudHeader';
import UserUploudFooter from 'components/UserUploudFooter';
import UserUploudContainer from './index';


describe('<UserUploudContainer />', () => {
  const initialState = { users: {
    data: [],
    load: false,
  } };
  const mockStore = configureStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}>
      <MemoryRouter initialEntries={['/']}>
        <UserUploudContainer handleFiles={{}} />
      </MemoryRouter>
    </Provider>);
  });


  it('UserUploudContainer should be defined', () => {
    expect(UserUploudContainer).toBeDefined();
  });
  it('should have UserUploudContainer tag when mount', () => {
    expect(wrapper.find(UserUploudContainer).length).toEqual(1);
  });
  it('should have UserUploudHeader tag when mount', () => {
    expect(wrapper.find(UserUploudHeader).length).toEqual(1);
  });
  it('should have UserUploudFooter tag when mount', () => {
    expect(wrapper.find(UserUploudFooter).length).toEqual(1);
  });
});

