import React from 'react'

export default function Items({products,setList,total,setTotal}) {

  const handleMore=(idx)=>{
    setList(products.map((p, i) => {if (i === idx){ p.quantity+=1;setTotal(Math.round(100*(total+p.price))/100)}return p}))
    
  }
  const handleLess=(idx)=>{
    setList(products.map((p, i) => {if (i === idx&&p.quantity>0) { p.quantity-=1;setTotal(Math.round(100*(total-p.price))/100)}return p}))
  }

  
  const productdisplay=()=>{
     return products.map((object,idx)=>{
      return (
        <div className='product' key={idx}>
          <img src={object.image} alt="product"></img>
          <div>{object.product}</div> 
          <div>{object.price}</div>
          <div>
            <button onClick={()=>handleMore(idx)}>+</button>
            {object.quantity}
            <button onClick={()=>handleLess(idx)}>-</button>
          </div>
          <div>{object.price*object.quantity}</div>
        </div>
      )
    })
  }
  return (
    <div className="products">
        {productdisplay()}
    </div>
  )

}