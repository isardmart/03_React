import React from 'react'

export default function Input(props) {
    const eurSetter=(e)=>{
        e.preventDefault();
        props.setEur(e.target.value);
    }
  return (
    <input type="number" onChange={eurSetter}/>
  )
}
