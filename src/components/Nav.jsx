import React from 'react'
import {Link} from "react-router-dom"

const Nav = () => {
  return (
    
    <div>
      <nav>
        <h1>eShop</h1>
        <input type="text"  placeholder="Search"/>

        <Link to ="/Signup">
        <p>Hello  <br /> <span>SignUp</span> </p> 
        </Link>

        
        <Link to = "/Shop">
        <p>Your <br /> <span>Shop</span></p> </Link>
        <button className="btn">Next Page</button>
        
      </nav>

      <img className='img' src="/images/ecom.jpg" alt="" />
    </div>
  )
}


export default Nav

