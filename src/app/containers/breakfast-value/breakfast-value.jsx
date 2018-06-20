import React from 'react'
import style from './breakfast-value.scss'

import StaticList from '../../presentational/static-list/static-list'

export default class test extends React.Component {
    constructor(props) {
        super()
        this.state = {}
    }

    componentDidMount() {
        // console.log('this.props :', this.props);
    }

    sum(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return null
        }

        return a + b
    }

    sub(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            return null
        }

        return a - b
    }

    render() {
        return (
            <div className='breakfast__container'>
                {
                    this.props.items
                        .slice(0, this.props.items.length > 11 ? 11 : this.props.items.length)
                        .map((item, index) => <StaticList key={index} item={item} />)
                }
            </div>
        )
    }
}
