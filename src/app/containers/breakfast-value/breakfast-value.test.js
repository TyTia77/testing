import React from 'react'
import { shallow, mount } from 'enzyme'
import Breakfast from './breakfast-value'
// import { shallowToJson } from 'enzyme-to-json'


describe('<Breakfast />', () => {
    const dom = shallow(<Breakfast items={new Array(20).fill({})} />)

    it('knows that 2 and 2 make 4', () => {
        expect(dom.instance().sum(2,2)).toBe(4)
    })

    it('knows that 2 and 2 doesnt make 5', () => {
        expect(dom.instance().sum(2,2)).not.toBe(5)
    })
})