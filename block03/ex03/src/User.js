import React from 'react'
import storeUser from './App'

export default function Password() {
  return (
    <div><input onChange={storeUser}/></div>
  )
}
