import React from 'react'
import Item from './Item.js'

export default function List(categories) {
  return (
    <ul>
        {categories.map(value=>{return Item(value)})}
    </ul>
)
}
