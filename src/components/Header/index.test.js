import React from 'react';
import { shallow, configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';


import Header from './index';

configure({ adapter: new Adapter() });
describe('<Header />', () => {
  it('header should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should have header tag when mount', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').length).toBe(1);
  });
  it('should have image tag when mount', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('img').length).toBe(1);
  });
  it('should have text when mount', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('h1').props().children).toBe('conpass');
  });
});

