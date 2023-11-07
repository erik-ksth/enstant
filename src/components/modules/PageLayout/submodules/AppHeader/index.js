import {React, useState} from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../../../../../index.css";
import Btn from "../../../../elements/Button";
import "./Header.css";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

//drawer elements used
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FolderIcon from "@mui/icons-material/Folder";
import ImageIcon from "@mui/icons-material/Image";
import DescriptionIcon from "@mui/icons-material/Description";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";

// const pages = ['Home', 'Demo', 'FAQs', 'About Us', 'Contact Us'];

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

  //react useState hook to save the current open/close state of the drawer, normally variables dissapear afte the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <div className={
      colorChange ? "mainContainer colorChange" : "mainContainer"
    }>
      <div className="container">
        <div className="logoContainer">
          <Link className="logo" to="/">
            enstant.com
          </Link>
        </div>
        
        <div className="navBarContainer">
        <NavLink exact to="/" className={`navBtn ${location.pathname === "/" ? "active-tab" : ""}`}>
            Home
          </NavLink>
          <NavLink to="/demo" className={`navBtn ${location.pathname === "/demo" || location.pathname === "/startDemo" ? "active-tab" : ""}`}>
            Demo
          </NavLink>
          <NavLink to="/faqs" className={`navBtn ${location.pathname === "/faqs" ? "active-tab" : ""}`}>
            FAQs
          </NavLink>
          <NavLink to="/about" className={`navBtn ${location.pathname === "/about" ? "active-tab" : ""}`}>
            About
          </NavLink>
          <NavLink to="/clients" className={`navBtn ${location.pathname === "/clients" ? "active-tab" : ""}`}>
            Cients
          </NavLink>
          <NavLink to="/contactUs" className={`navBtn ${location.pathname === "/contactUs" ? "active-tab" : ""}`}>
            Contact
          </NavLink>
        </div>
        <div className="getStartedBtnContainer">
          <Btn label="Get Started" to="/getStarted"/>
        </div>

        <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            className="menuIcon"
          >
            <MenuIcon />
          </IconButton>

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="right"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#dbc8ff"
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItemButton>
                  <ListItemIcon>
                    <ImageIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Pictures" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <DescriptionIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Documents" />
                </ListItemButton>

                <ListItemButton>
                  <ListItemIcon>
                    <FolderIcon sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Other" />
                </ListItemButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)"
                }}
              >
                <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                  Register
                </Button>
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                  Login
                </Button>
              </Box>
            </Box>
          </Drawer>
      </div>
    </div>
  );
}
export default NavBar;
