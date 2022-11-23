import React from 'react'
import storePassword from './App'

export default function Password() {
  return (
    <div><input onChange={storePassword}/></div>
  )
}
