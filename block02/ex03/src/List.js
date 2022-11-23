import React from 'react'
import Item from './Item.js'

export default class List extends React.Component{
    
  render(){
    return (
        <ul>
            {this.props.categories.map(value=>{return <Item item={value}/>})}
        </ul>
    )
  }
}