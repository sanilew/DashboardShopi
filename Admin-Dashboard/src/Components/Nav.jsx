import React from 'react'
import "./Nav.css"

const Nav = ({title,Icon}) => {
  return (
    <div className='nav'> 
    {Icon && <Icon className="nav"/>}
    <h2>{title ? title : null}</h2>
     
    </div>
  )
}

export default Nav