import React from 'react'

import BreakfastContainer from '../containers/breakfast-value/breakfast-value'


export default class test extends React.Component {
    constructor(props) {
        super()
        this.state = {
            items: (function () {
                return new Array(11)
                    .fill({
                        title: 'sausage',
                        items: [
                            { name: 'meal', price: 69.69 },
                            { name: 'a la carte', price: 69.69 }
                        ]
                    })
                    .map((item, index) => {
                        item = Object.assign({}, item)
                        item.title = `${item.title} ${++index}`
                        return item
                    })
            }())
        }
    }

    componentDidMount() {
        console.log('this.state :', this.state)
    }

    render() {
        return (
            <div>
                <BreakfastContainer items={this.state.items} />
            </div>
        )
    }
}
