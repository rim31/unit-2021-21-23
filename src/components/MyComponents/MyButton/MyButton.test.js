import React from 'react';
import { shallow } from 'enzyme';
import MyButton from './MyButton';

describe('<MyButton /> component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<MyButton />);
    });

    describe('render()', () => {
        it('should display the good text in button', () => {
            const label = wrapper.find("#MyButton").text()
            expect(label).toEqual("Load More" || "Retry");
        });

        it('should invoke onClick prop when clicked on button', () => {
            const fetchData = jest.fn();
            const setLoading = jest.fn();
            const tree = shallow(<MyButton fetchData={fetchData} setLoading={setLoading} />);
            const button = tree.find("#MyButton")
            button.simulate('click')
            const label = wrapper.find("#MyButton").text()
            // expect(label).toEqual("");
            expect(label).toEqual("Load More" || "Retry");
        });

        it('should onClick on button and fetch', () => {
            const fetchData = jest.fn();
            const setLoading = jest.fn();
            const tree = shallow(<MyButton fetchData={fetchData} setLoading={setLoading} />);
            const button = tree.find("#MyButton")
            button.simulate('click')
        });
    });
});
