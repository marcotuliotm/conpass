import React from 'react';
import { shallow, mount } from 'enzyme';

import Header from './index';


describe('<Header />', () => {
  it('header should be defined', () => {
    expect(Header).toBeDefined();
  });
  it('should have header tag when mount', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header')).toHaveLength(1);
  });
  it('should have image tag when mount', () => {
    const wrapper = mount(<Header />);
    expect(wrapper.find('img')).toHaveLength(1);
  });
});

