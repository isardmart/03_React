import React from 'react'
import {useParams} from 'react-router-dom'

export default function Data() {
    const params=useParams()
  return (
    <div>
        <h1>Data Component</h1>
        <p>This data is coming through the url params: {params.somedata}</p>
    </div>
  )
}
