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

    LongestWord(sen) {
        return sen
          .match(/[a-z0-9]+/gi)
          .reduce((largest, current) => largest = current.length > largest.length ? current : largest, '')
    }

    FirstFactorial(num) {
        return num < 2 ? 1 : num * FirstFactorial(num - 1)
    }

    FirstReverse(str) {
        return str.split('').reverse().join('')
    }

    SimpleAdding(num) {
        let inc = 1
        let total = 1

        while (++inc <= num) {
            total = inc + total
        }

        return total
    }

    LetterCapitalize(str) {
        return str
          .split(' ').map(x => x.slice(0, 1).toUpperCase() + x.slice(1))
          .join(' ')
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
