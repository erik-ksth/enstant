import React, { useState } from "react";
import Btn from "../../../elements/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";
import Step5 from "../Step5";
import Step6 from "../Step6";
import "./style.css";

const theme = createTheme({
  typography: {
    fontFamily: "NatsReg, sans-serif",
    fontSize: "25px",
  },
});

export default function GettingInfo() {
  const [skipped, setSkipped] = React.useState(new Set());
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    phone: "",
    email: "",
    companyName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zipCode: "",
    website: "",
    numberOfEmployees: "",
    numberOfLocations: "",
    decisionMakerName: "",
    decisionMakerJobTitle: "",
    decisionMakerEmail: "",
    orderFrequency: "",
    currentOrderRequestMethod: "",
    currentOrderPlaceMethod: "",
    paperBrand: "",
    weight: "",
    color: "",
    paperFinish: "",
    software: "",
    sample: "",
  });

  const FormTitles = [
    `Let’s get to know about you`,
    "Let us know about your company",
    "About your business cards",
    "About your business cards ordering process",
    "Questions or Comments",
    "Submitted"
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData} />;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData} />;
      case 2:
        return <Step3 formData={formData} setFormData={setFormData} />;
      case 3:
        return <Step4 formData={formData} setFormData={setFormData} />;
      case 4:
        return <Step5 formData={formData} setFormData={setFormData} />;
      default:
        return <Step6 />;
    }
  };

  const isStepOptional = (step) => {
    return step === 1 || step === 2 || step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  return (
    <ThemeProvider sx={{ maxWidth: "1500px" }} theme={theme}>
      <div className="form">
        <div className="formContainer">
          <div className="body">{PageDisplay()}</div>
          {page <= FormTitles.length - 2 && (
            <div className={`footer ${page == 0 ? "disableBack" : ""}`}>
              {/* Back Button */}
              {page !== 0 && (
                <button
                  disabled={page == 0}
                  onClick={() => {
                    setPage((currPage) => currPage - 1);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <Btn label={"Back"} back={true} />
                </button>
              )}
              <div className="nextBtns">
                {/* Skip Button */}
                {isStepOptional(page) && (
                  <button
                    color="inherit"
                    onClick={() => {
                      setPage((currPage) => currPage + 1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="skipBtn"
                  >
                    Skip
                  </button>
                )}
                {/* Continue Button */}
                <button
                  onClick={() => {
                    if (page === FormTitles.length - 2) {
                      setPage((currPage) => currPage + 1);
                      console.log(formData);
                    } else {
                      setPage((currPage) => currPage + 1);
                    }
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  {page === FormTitles.length - 2 ? (
                    <Btn label={"Submit"} />
                  ) : (
                    <Btn label={"Continue"} />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </ThemeProvider>
  );
}
