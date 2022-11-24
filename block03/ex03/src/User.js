import React from 'react'

export default function User(props) {
    const storeUser = (e) => {
    props.userSetter(e.target.value)
    }
      return (
        <div><input onChange={storeUser}/></div>
      )
}