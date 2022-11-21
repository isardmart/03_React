import React from 'react'
import '../App.css';



export default function header() {
    let cartNumber=0;
  return (
    <header>
      <p className="logo">Chalkd</p>
      <ul>
        <li>HOME</li>
        <li>SHOP</li>
        <li>CUSTOM</li>
        <li>CORPORATE</li>
        <li>CONTACT</li>
      </ul>
      <p>Cart ({cartNumber})</p>
    </header>
  )
}
