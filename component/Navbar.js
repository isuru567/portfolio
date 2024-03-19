import React from 'react'
import './navbar.css'


export default function Navbar() {
  return (
    <nav className="nav_wapper">
     
      <div className="nav_content">
         
       <ul>
            <li>
               <a href='#' className="items">Home</a>
            </li>
            <li>
               <a href='#' className="items">About Me</a>
            </li>
            <li>
               <a href='#' className="items">Portfolio</a>
            </li>
            <li>
               <a href='#' className="items">Contact Me</a>
            </li>
         </ul>
 
        
      </div>
    </nav>
  )
}
