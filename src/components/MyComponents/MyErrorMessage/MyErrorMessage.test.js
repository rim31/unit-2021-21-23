import React from 'react';
import { shallow } from 'enzyme';
import MyErrorMessage from './MyErrorMessage';

describe('<MyErrorMessage /> component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MyErrorMessage />);
    });

    describe('render()', () => {
        it('should display the passed text', () => {
            const label = wrapper.find("#MyErrorMessage").text()
            expect(label).toEqual("We have a problem fetching your data, Please try again" || "");
        });
    });
});
