import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import UserFormHeader from 'components/UserFormHeader';
import UserFormContainer from './index';


describe('<UserFormContainer />', () => {
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
        <UserFormContainer />
      </MemoryRouter>
    </Provider>);
  });

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

