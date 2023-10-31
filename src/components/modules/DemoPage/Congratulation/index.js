import React from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Congratulation() {
     return (
          <div class="text-xl text-center">
               <CheckCircleIcon style={icon}/>
               <p style={text}>Congratulation!</p>
               <p style={text}>Your order has been successfully submitted.</p>
          </div>
     )
}

export default Congratulation;

const icon = {
  color: "#2EE400",
  fontSize: "5em",
}

const text = {
     textAlign: 'center',
     textWeight: 'bold',
     fontFamily: 'natsReg',
     fontSize: '2em',
     color: '#2EE400',
}