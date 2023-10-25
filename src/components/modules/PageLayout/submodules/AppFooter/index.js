import React from "react";
import './Footer.css'

function AppFooter() {
    return (
        <div className="parentContainer">
            <div className='logoContainer'>
                <a className='logo' href="/">enstant.com</a>
            </div>

            <img src="/images/icons/certificates.svg"></img>

            <div className='footerNavBarContainer'>
                <a className='footerNavBtn' href="/">Home</a>
                <a className='footerNavBtn' href="/">Demo</a>
                <a className='footerNavBtn' href="/">FAQs</a>
                <a className='footerNavBtn' href="/">About Us</a>
                <a className='footerNavBtn' href="/">Contact Us</a>
            </div>
        </div>
    )
}

export default AppFooter