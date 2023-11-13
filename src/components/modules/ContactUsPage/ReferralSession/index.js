import React from "react";
import Btn from "../../../elements/Button"

function ReferralSession() {
     return (
          <div style={referrSessionContainer}>
               <h2><span>Refer</span> to your Company's Decision Maker</h2>
               <p>Let your company's decision makers know about us.</p>
               <Btn label={"Refer"} to={"/referral"}></Btn>
          </div>
     )
}

export default ReferralSession;

const referrSessionContainer = {
     display: "flex",
     flexDirection: "column",
     justifyContent: "center",
     alignItems: "center",
     rowGap: "30px",
     borderTop: "1px solid #00000030",
     padding: "3% 0"
}