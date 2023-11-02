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
                <a className='footerNavBtn' href="/demo">Demo</a>
                <a className='footerNavBtn' href="/about">FAQs</a>
                <a className='footerNavBtn' href="/about">About Us</a>
                <a className='footerNavBtn' href="/contactUs">Contact Us</a>
            </div>
        </div>
    )
}

export default AppFooter