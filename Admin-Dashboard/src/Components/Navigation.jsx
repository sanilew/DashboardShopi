import React from 'react'
import "./Navigation.css"
import Nav from "./Nav"
import {MdDashboard} from "react-icons"

const Navigation = () => {
  return (
    <div className='navigation'>
        <header>
            <div className='profile'>
                <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60' alt='user-img' className='profile-img'/>
            </div>
            <span>Jenny D'Souza</span>
        </header>

      <Nav title="Dashboard" Icon={MdDashboard}/>
    </div>
  )
}

export default Navigation
