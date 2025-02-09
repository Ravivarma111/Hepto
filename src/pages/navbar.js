import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary bg-gradient" >
    <Link className="navbar-brand text-light">Navbar</Link>
   
    <button className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
  
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link text-light" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to='/contactUs'>ContactUs</Link>
        </li>
        <li className="nav-item ">
        <Link className="nav-link text-light" to='/aboutUs'>AboutUs</Link>
  
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to='/signUp'>SignUp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to='/login'>Login</Link>
        </li>
      </ul>
     
    </div>
  </nav>
  )
}

export default Navbar