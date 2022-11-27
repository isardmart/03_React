import React,{useState,useEffect} from 'react';
import Items from './Items';

export default function Cart({products,setList}) {
    const [total,setTotal]=useState(27.5+22.5+13.9);
    const [style,setStyle]=useState('red');
    const [message,setMessage]=useState('Shipping will be charged');

    useEffect(()=>{
        if (total<500){
            setMessage('Shipping will be charged');
            setStyle('red');
        }else{
            setMessage('Free Shipping');
            setStyle('green');
        }
    },[total])
    

  return (
    <div>
        <header>
            <div>CART</div>
            <h3 className={style}>{message}</h3>
            <div>$ {total}</div>
        </header>
        <Items products={products} setList={setList} total={total} setTotal={setTotal} />
    </div>
  )
}
