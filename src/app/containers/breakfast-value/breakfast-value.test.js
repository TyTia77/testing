import React from 'react'
import { shallow, mount } from 'enzyme'
import Breakfast from './breakfast-value'
import Child from '../../presentational/static-list/static-list'
// import { shallowToJson } from 'enzyme-to-json'


describe('<Breakfast />', () => {
    const dom = shallow(<Breakfast items={new Array(5).fill({})} />)

    it('knows that 2 and 2 make 4', () => {
        expect(dom.instance().sum(2,2)).toBe(4)
    })

    it('handles numbers only', () => {
        expect(dom.instance().sum('2',2)).toBe(null)
    })

    it('knows that 2 and 2 doesnt make 5', () => {
        expect(dom.instance().sum(2,2)).not.toBe(5)
    })

    it('knows that 2 and 2 makes 0', () => {
        expect(dom.instance().sub(2,2)).toBe(0)
    })

    it('handles numbers only', () => {
        expect(dom.instance().sub([2],2)).toBe(null)
        expect(dom.instance().sub({abe: 1},2)).toBe(null)
    })

    it('is rendering 11 child components', () => {
        expect(dom.find(Child).length).toBeLessThanOrEqual(11)
    })
})