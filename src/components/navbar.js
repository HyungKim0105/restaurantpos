import React from 'react'
import logo from "../restaurantAssets/Logo.png"
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={logo} alt="logo" class="logo" />
        <h1>Korean Fried Chicken</h1>
    </div>
  )
}

export default Navbar
