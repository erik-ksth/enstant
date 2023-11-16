import React from "react";
import "../GetStarted.css";
import ReCAPTCHA from "react-google-recaptcha";
import "../../../../index.css";

function Step5({ formData, setFormData, capVal, setCapVal }) {
  const recaptchaKey = process.env.REACT_APP_RECAPTCHA_KEY;

  return (
    <div style={container}>
      <h2>Questions or Comments</h2>
      <p className="description">(Optional)</p>
      <textarea
        id="comment"
        name="comment"
        rows="5"
        value={formData.comments}
        onChange={(event) =>
          setFormData({ ...formData, comment: event.target.value })
        }
      ></textarea>
      <ReCAPTCHA sitekey={recaptchaKey} onChange={(val) => setCapVal(val)} />
    </div>
  );
}

export default Step5;

const container = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  rowGap: "20px",
  marginBottom: "50px"
}