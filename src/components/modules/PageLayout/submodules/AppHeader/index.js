import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import { Link } from '@mui/material';
import '../../../../../index.css';
import NavBtn from '../../../../elements/Button';

// const pages = ['Home', 'Demo', 'FAQs', 'About Us', 'Contact Us'];

function NavBar() {

  return (
    <Container sx={navBarContainer}>
      <Box sx={logoContainer}>
          <Link sx={{ color: `var(--primary-blue)`, textDecoration: 'none', fontWeight: '600'}} href="/">enstant.com</Link>
      </Box>
      <Box sx={navBtnContainer}>
          <Link sx={navBtn} href="/">Home</Link>
          <Link sx={navBtn} href="/">Demo</Link>
          <Link sx={navBtn} href="/">About Us</Link>
          <Link sx={navBtn} href="/">Contact Us</Link>
      </Box>
      <Box sx={getStartedBtnContainer}>
        <NavBtn label='Get Started'/>
      </Box>
    </Container>
  );
}
export default NavBar;

const navBarContainer = {
  display: 'flex',
  justifyContent: 'space-between'
}

const logoContainer = {
  width: "15%",
}

const navBtnContainer = {
  width: "70%",
  display: 'flex',
  justifyContent: 'center'
}

const getStartedBtnContainer = {
  width: "15%",
  textAlign: 'right',
}

const navBtn = {
  textDecoration: 'none',
  color: `var(--inactive-text-color)`,
  margin: '0 4%'
}