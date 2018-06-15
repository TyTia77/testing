import React from 'react'
import propTypes from 'prop-types'

const list = ({item}) =>
    <div>
        <div>{item.title}</div>
        {item.items.map((item, index) => <div key={index}>item.type item.price </div>)}
    </div>

list.propTypes = {
    item: propTypes.object,
}

export default list