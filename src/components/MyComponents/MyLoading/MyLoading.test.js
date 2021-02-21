import React from 'react';
import { shallow } from 'enzyme';
import MyLoading from './MyLoading';

describe('<MyLoading /> component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MyLoading />);
  });

  describe('render()', () => {
    it('should display the good text in button', () => {
      expect(wrapper.find("#MyLoading").exists()).toBeTruthy()
    });
  });
});
