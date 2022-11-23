import React from 'react';
import "../App.css";


export default class SingleProduct extends React.Component {
  
  render(){
    return (
      <div className="product-block">
          <img src={this.props.product.image} alt="product"></img>
          <div className='productinfo'>
              <p>{this.props.product.product}</p>
              <p id="price">${this.props.product.price}</p>
          </div>
          
      </div>
  )}
}
