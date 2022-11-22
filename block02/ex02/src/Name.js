import React from 'react'

export default class Name extends React.Component{
    
  render(){
    console.log(this.props)
    return (
      <div>
            <span> {this.props.name}</span>
          </div>
    )
  }
}