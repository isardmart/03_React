import React from 'react'

export default class Surname extends React.Component{
    
  render(){
    console.log(this.props)
    return (
      <div>
            <span> {this.props.surname}</span>
          </div>
    )
  }
}