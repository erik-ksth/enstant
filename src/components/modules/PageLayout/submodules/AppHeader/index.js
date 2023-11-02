import * as React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../../../../../index.css";
import Btn from "../../../../elements/Button";
import "./Header.css";

// const pages = ['Home', 'Demo', 'FAQs', 'About Us', 'Contact Us'];

function NavBar() {
  const location = useLocation();
  return (
    <div className="container">
      <div className="logoContainer">
        <Link className="logo" to="/">
          enstant.com
        </Link>
      </div>
      {/* <div className="navBarContainer">
        <Link className="navBtn" to="/">Home</Link>
        <Link className="navBtn" to="/demo">Demo</Link>
        <Link className="navBtn" to="/about">About Us</Link>
        <Link className="navBtn" to="/contactus">Contact Us</Link>
      </div> */}
      
      <div className="navBarContainer">
      <NavLink exact to="/" className={`navBtn ${location.pathname === "/" ? "active-tab" : ""}`}>
          Home
        </NavLink>
        <NavLink to="/demo" className={`navBtn ${location.pathname === "/demo" || location.pathname === "/startDemo" ? "active-tab" : ""}`}>
          Demo
        </NavLink>
        <NavLink to="/about" className={`navBtn ${location.pathname === "/about" ? "active-tab" : ""}`}>
          About Us
        </NavLink>
        <NavLink to="/contactUs" className={`navBtn ${location.pathname === "/contactUs" ? "active-tab" : ""}`}>
          Contact Us
        </NavLink>
      </div>
      <div className="getStartedBtnContainer">
        <Btn label="Get Started" to="/getStarted"/>
      </div>
    </div>
  );
}
export default NavBar;
