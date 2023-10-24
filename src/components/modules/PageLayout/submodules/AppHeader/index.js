import * as React from 'react';
import '../../../../../index.css';
import Btn from '../../../../elements/Button';
import './Header.css'

// const pages = ['Home', 'Demo', 'FAQs', 'About Us', 'Contact Us'];

function NavBar() {

  return (
      <div className='container'>
        <div className='logoContainer'>
            <li className='logo' href="/">enstant.com</li>
        </div>
        <div className='navBarContainer'>
            <li className='navBtn' href="/">Home</li>
            <li className='navBtn' href="/">Demo</li>
            <li className='navBtn' href="/">About Us</li>
            <li className='navBtn' href="/">Contact Us</li>
        </div>
        <div className='getStartedBtnContainer'>
          <Btn label='Get Started'/>
        </div>
      </div>
  );
}
export default NavBar;
