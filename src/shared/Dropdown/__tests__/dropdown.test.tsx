
///**
//* @jest-environment jsdom   // if we use window.something (some prop of window we need environment)
//*/

import { shallow } from "enzyme";
import { Dropdown } from "../Dropdown";
import React from 'react';

describe('dropdown', ()=> {
    test('should render', ()=> {
        const wrapper = shallow(<Dropdown  children={<div />} button={<button />} />);
        expect(wrapper).toBeDefined();
        console.log(wrapper.find('div.container').debug())
        // console.log(window)
        expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
    })

    test('should render (snapshot)', ()=> {
        const wrapper = shallow(<Dropdown  children={<div />} button={<button />} />);

        expect(wrapper).toMatchSnapshot();
    })
})