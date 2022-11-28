import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className='navbar'>
        <NavLink to={'/'} style={({isActive})=>isActive?styles.activeLink:styles.defaultLink}>
            Home Page
        </NavLink>
        <NavLink to={'/about'} style={({isActive})=>isActive?styles.activeLink:styles.defaultLink}>
            About Page
        </NavLink>
        <NavLink to={'/contact'} style={({isActive})=>isActive?styles.activeLink:styles.defaultLink}>
            Contact Page
        </NavLink>
        <NavLink to={'/profile'} style={({isActive})=>isActive?styles.activeLink:styles.defaultLink}>
            Profile Page
        </NavLink>

    </div>
  )
}
let styles={
    activeLink:{
        color:"orange"
    },
    defaultLink:{
        color:"green"
    }
}

/*<ul onClick={(e)=>props.selectPage(e.target.textContent)}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Profile</li>
        </ul>
*/