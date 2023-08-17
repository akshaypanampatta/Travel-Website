import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
      <nav class="navbar">
        <div class="logo">SeekOut</div>

        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
            <li>
              <Link to='/' >Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li class="services">
             <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <button type="button" class="btn btn-secondary">
               Sign up
              </button>
            </li>
          </div>
        </ul>
      </nav>
    
  );
}

export default Navbar;
