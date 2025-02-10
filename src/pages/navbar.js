import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4 text-light" to="/">
          <img
            src="/images/emslogo.jpg" 
            alt="Logo"
            className="me-2 rounded-circle"
            width="40" 
          />
          Employee Management System
        </Link>
        <button
          className="navbar-toggler"
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
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/contactUs">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/aboutUs">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light fs-5 px-3" to="/signUp">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-light px-4 mx-2" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
