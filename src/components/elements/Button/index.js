import React from 'react';
import '../../../App.css'
import '../../../index.css';

const NavBtn = ({ label, onClick }) => {
  return (
    <button className="navBtn" onClick={onClick}>
      {label}
    </button>
  );
};

export default NavBtn;
