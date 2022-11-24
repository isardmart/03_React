import React from 'react'

export default function Button(props) {
    let user=props.userState;
    let password=props.passwordState;

    const Alert=()=>{
        if (user !==''& password!==''){alert(`user:${user} and password ${password[0]}**** is stored`)}
      }
  return (
    <div><button onClick={Alert}></button></div>
  )
}
