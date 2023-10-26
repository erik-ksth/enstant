import * as React from "react";
import { Link } from "react-router-dom";
import "../../../../../index.css";
import Btn from "../../../../elements/Button";
import "./Header.css";

// const pages = ['Home', 'Demo', 'FAQs', 'About Us', 'Contact Us'];

function NavBar() {
  return (
    <div className="container">
      <div className="logoContainer">
        <Link className="logo" to="/">
          enstant.com
        </Link>
      </div>
      <div className="navBarContainer">
        <Link className="navBtn" to="/">Home</Link>
        <Link className="navBtn" to="/demo">Demo</Link>
        <Link className="navBtn" to="/about">About</Link>
        <Link className="navBtn" to="/contactus">Contact Us</Link>
      </div>
      <div className="getStartedBtnContainer">
        <Btn label="Get Started"/>
      </div>
    </div>
  );
}
export default NavBar;
