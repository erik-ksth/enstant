import React from "react";
import "./Footer.css";

function AppFooter() {
  return (
    <div className="parentContainer">
      <div className="logoContainer">
        <a className="logo" href="/">
          enstant.com
        </a>
      </div>

      <a href="https://www.bbb.org/us/ca/sunnyvale/profile/graphic-printing/2-direct-press-oakmead-printing-inc-1216-1000001833/#qrcode">
        <img src="/images/icons/certificates.svg"></img>
      </a>

      <div className="footerNavBarContainer">
        <a className="footerNavBtn" href="/">
          Home
        </a>
        <a className="footerNavBtn" href="/demo">
          Demo
        </a>
        <a className="footerNavBtn" href="/faqs">
          FAQs
        </a>
        <a className="footerNavBtn" href="/clients">
          Clients
        </a>
        <a className="footerNavBtn" href="/about">
          About Us
        </a>
        <a className="footerNavBtn" href="/contactUs">
          Contact Us
        </a>
      </div>

      <p style={{ color: "white" }}>Copyright © 1997-2023 Enstant.com</p>
    </div>
  );
}

export default AppFooter;
