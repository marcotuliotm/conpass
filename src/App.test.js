import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Switch } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Header from 'components/Header';
import App from './App';


describe('<App />', () => {
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
        <App />
      </MemoryRouter>
    </Provider>);
  });


  it('App should be defined', () => {
    expect(App).toBeDefined();
  });
  it('should have App tag when mount', () => {
    expect(wrapper.find(App).length).toEqual(1);
  });
  it('should have Header tag when mount', () => {
    expect(wrapper.find(Header).length).toEqual(1);
  });
  it('should have Switch when mount', () => {
    expect(wrapper.find(Switch).length).toEqual(1);
  });
});

