import React from 'react';
import Button from '@mui/material/Button';
import '../../../App.css'
import '../../../index.css';

const NavBtn = ({ label, onClick }) => {
  return (
    <Button variant='contained' sx={
      {backgroundColor: `var(--primary-blue)`,
        textTransform: 'none',
        fontFamily: `NatsReg`,
        fontSize: '20px',
        padding: '0px 25px',
      }
    }>{label}</Button>
  );
};

export default NavBtn;
