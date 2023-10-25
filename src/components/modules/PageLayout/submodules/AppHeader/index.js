import * as React from 'react';
import '../../../../../index.css';
import Btn from '../../../../elements/Button';
import './Header.css'

// const pages = ['Home', 'Demo', 'FAQs', 'About Us', 'Contact Us'];

function NavBar() {

  return (
      <div className='container'>
        <div className='logoContainer'>
            <a className='logo' href="/">enstant.com</a>
        </div>
        <div className='navBarContainer'>
            <a className='navBtn' href="/">Home</a>
            <a className='navBtn' href="/">Demo</a>
            <a className='navBtn' href="/">About Us</a>
            <a className='navBtn' href="/">Contact Us</a>
        </div>
        <div className='getStartedBtnContainer'>
          <Btn label='Get Started'/>
        </div>
      </div>
  );
}
export default NavBar;
