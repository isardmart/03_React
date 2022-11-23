import React from 'react'
import SingleProduct from './SingleProduct'
import "../App.css";


export default class ProductList extends React.Component {
  render(){
    return (
    this.props.products.map((value) => {
        return <SingleProduct product={value}/>;
      })
)
}
}/*
<ul>
            {this.props.categories.map(value=>{return <Item item={value}/>})}
        </ul>*/