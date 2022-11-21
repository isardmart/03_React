import React from 'react'
class Child extends React.Component{
    render(){
        return (
            <div><p>Hello {this.props.name}, I am the child component!</p></div>
            
          )
    }
}
/*
const Child=(props)=> {
  return (
    <div><p>Hello {props.name}, I am the child component!</p></div>
    
  )
}
*/
export default Child