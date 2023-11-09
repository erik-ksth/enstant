import { React, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../../../../../index.css";
import Btn from "../../../../elements/Button";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
  const location = useLocation();
  const [colorChange, setColorChange] = useState(false);
  const changeNavBarColor = () => {
    if (window.scrollY >= 10) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };
  window.addEventListener("scroll", changeNavBarColor);

  const [isOpen, setOpen] = useState(false);
  const handleMenu = () => {
    if (isOpen) {
      console.log("The menu is closed");
      setOpen(false);
    } else {
      console.log("The menu is opened");
      setOpen(true);
    }
  };

  return (
    <div
      className={colorChange ? "mainContainer colorChange" : "mainContainer"}
    >
      <div className="container">
        <div className="logoContainer">
          <Link className="logo" to="/">
            enstant.com
          </Link>
        </div>

        <div className="navBarContainer">
          <NavLink
            exact
            to="/"
            className={`navBtn ${
              location.pathname === "/" ? "active-tab" : ""
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/demo"
            className={`navBtn ${
              location.pathname === "/demo" ||
              location.pathname === "/startDemo"
                ? "active-tab"
                : ""
            }`}
          >
            Demo
          </NavLink>
          <NavLink
            to="/faqs"
            className={`navBtn ${
              location.pathname === "/faqs" ? "active-tab" : ""
            }`}
          >
            FAQs
          </NavLink>
          <NavLink
            to="/about"
            className={`navBtn ${
              location.pathname === "/about" ? "active-tab" : ""
            }`}
          >
            About
          </NavLink>
          <NavLink
            to="/clients"
            className={`navBtn ${
              location.pathname === "/clients" ? "active-tab" : ""
            }`}
          >
            Clients
          </NavLink>
          <NavLink
            to="/contactUs"
            className={`navBtn ${
              location.pathname === "/contactUs" ? "active-tab" : ""
            }`}
          >
            Contact
          </NavLink>
        </div>
        <div className="getStartedBtnContainer">
          <Btn label="Get Started" to="/getStarted" />
        </div>
        {/* Hamburger Menu */}
        <div onClick={handleMenu} setOpen="false" className="menuIconWrapper">
          {isOpen ? <CloseIcon className="menuIcon"/> : <MenuIcon className="menuIcon" />}
        </div>
      </div>

      {/* Drawer Menu */}
      <div className={`dimOverlay ${!isOpen ? "hideDimOverlay" : ""}`}></div>
      <div className={`menuDrawer ${!isOpen ? "closeDrawer" : ""}`}>
        <div className="drawerNavbarContainer">
          <NavLink
            exact
            to="/"
            className={`drawerNavBtn ${
              location.pathname === "/" ? "active-tab-drawer" : ""
            }`}
          >
            Home
          </NavLink>
          <NavLink
            to="/demo"
            className={`drawerNavBtn ${
              location.pathname === "/demo" ||
              location.pathname === "/startDemo"
                ? "active-tab-drawer"
                : ""
            }`}
          >
            Demo
          </NavLink>
          <NavLink
            to="/faqs"
            className={`drawerNavBtn ${
              location.pathname === "/faqs" ? "active-tab-drawer" : ""
            }`}
          >
            FAQs
          </NavLink>
          <NavLink
            to="/about"
            className={`drawerNavBtn ${
              location.pathname === "/about" ? "active-tab-drawer" : ""
            }`}
          >
            About
          </NavLink>
          <NavLink
            to="/clients"
            className={`drawerNavBtn ${
              location.pathname === "/clients" ? "active-tab-drawer" : ""
            }`}
          >
            Clients
          </NavLink>
          <NavLink
            to="/contactUs"
            className={`drawerNavBtn ${
              location.pathname === "/contactUs" ? "active-tab-drawer" : ""
            }`}
          >
            Contact
          </NavLink>
        </div>
        <div className="drawerGetStartedBtnContainer">
          <Btn label="Get Started" to="/getStarted" />
        </div>
      </div>
    </div>
  );
}
export default NavBar;
