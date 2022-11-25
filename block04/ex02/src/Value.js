import React from 'react'

export default function Value({eur}) {
    const usdConversion=()=>{
        return(eur*1.17)
    }
  return (
    <h1>{usdConversion()}</h1>
  )
}
