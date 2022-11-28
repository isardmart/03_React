import React from 'react'

export default function ItemDisplay({products,display}) {
    const productDisplay=()=>{
        if (display==='all'||display==='hats'||display==='t-shirts'){
        return products.map((value,idx)=>{
            if(value.category===display || display==='all'){
                return <div key={idx}>
                    <p>Name: {value.product}</p>
                    <p>Category:{value.category}</p>
                    <p>Price: {value.price}</p>
                </div>}
        })
        }else{
            return <h1>No products found!</h1>
        }
    }
  return (
    <div>
        {productDisplay()}
    </div>
  )
}
