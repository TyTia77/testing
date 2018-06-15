import React from 'react'
import propTypes from 'prop-types'
import style from './static-list.scss'

const list = ({item}) =>
    <div class="static-list__container">
        <div class="static-list__header">{item.title}</div>
        {item.items.map((item, index) => <div key={index}>{item.type} {item.price} </div>)}
    </div>

list.propTypes = {
    item: propTypes.object,
}

export default list