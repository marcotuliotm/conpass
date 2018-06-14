import React from 'react';
import { shallow, configure } from 'enzyme';

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
});

