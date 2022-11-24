import React from 'react'

export default function Password(props) {
    const storePassword = (e) => {
    props.passwordSetter(e.target.value)
    }
      return (
        <div><input onChange={storePassword}/></div>
      )
}
