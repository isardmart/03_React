import React from 'react'

export default function productUI(value) {
  return (
    <div className="product-block">
        <img src={value.image} alt="product"></img>
        <div className='productinfo'>
            <p>{value.product}</p>
            <p id="price">${value.price}</p>
         </div>
    </div>
  )
}
