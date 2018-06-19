import { shallow } from 'enzyme';
import React from 'react';
import UserForm from './index';


describe('<UserForm />', () => {
  it('UserForm should be defined', () => {
    expect(UserForm).toBeDefined();
  });
  const wrapper = shallow(<UserForm />);
  it('should have First Name when mount', () => {
    expect(wrapper.find('#inputFirst').length).toEqual(1);
  });
  it('should have Last Name when mount', () => {
    expect(wrapper.find('#inputLast').length).toEqual(1);
  });
  it('should have Company when mount', () => {
    expect(wrapper.find('#inputCompany').length).toEqual(1);
  });
  it('should have Email when mount', () => {
    expect(wrapper.find('#inputEmail').length).toEqual(1);
  });
  it('should have Password when mount', () => {
    expect(wrapper.find('#inputPassword').length).toEqual(1);
  });
  it('should have Repeat Password when mount', () => {
    expect(wrapper.find('#inputRepeat').length).toEqual(1);
  });
});

