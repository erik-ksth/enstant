import React from "react";
import "../../../../index.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Button from "../../../elements/Button";

function Congratulation(props) {
  return (
    <div class="text-xl text-center">
      <CheckCircleIcon style={icon} />
      <p style={text}>Congratulation!</p>
      <p style={text}>Your order has been successfully submitted.</p>

      <div class="mt-10">
        <h2 style={{ letterSpacing: "-3px", lineHeight: "50px" }}>
          Thank you for taking a quick demo,
          <br />
          <span>{props.name}!</span>
        </h2>
          <p style={promoPara}>
            This demo shows <span>one of the features</span> that our online
            tool provides to manage business card orders.
            <br />
            <br />
            Did you see... <br />
            <span>&#10003;</span> How it makes business cards ordering{" "}
            <span>quicker, easier, smarter</span> and <span>convenient</span>?
            <br/>
            <span>&#10003;</span> How it{" "}
            <span>eliminates</span> multiple proofing cycles and <span>prevents errors</span>?
            <br/>
            <span>&#10003;</span> How it helps{" "}
            <span>save</span> valuable time and <span>boost</span> productivity?
            <br/>
            <span>&#10003;</span> How it gives you{" "}
            <span>control</span> in placing business card orders?
            <br/>
            <span>&#10003;</span> How it{" "}
            <span>speeds up</span> getting business cards, especially for Key personnel?
            <br/>
            <span>&#10003;</span> How it can{" "}
            <span>benefit</span> you and your company?
            <br/>
            <br/>
            If you answer <span>yes</span> to any of the above questions,
            <br/>
            we can definitely help you achieve them at your company with our online Tool.
            <br/>
            Get started now, by clicking the Get Started!
          </p>
          <Button label="End Demo" to="/demo"></Button>
      </div>
    </div>
  );
}

export default Congratulation;

const icon = {
  color: "#2EE400",
  fontSize: "5em",
};

const text = {
  textAlign: "center",
  textWeight: "bold",
  fontFamily: "natsReg",
  fontSize: "2em",
  color: "#2EE400",
};

const promoPara = {
  margin: "20px 0",
  fontSize: "120%",
  lineHeight: "50px"
};
