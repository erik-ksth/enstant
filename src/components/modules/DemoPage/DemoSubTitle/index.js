import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Congratulation from "../Congratulation";
import DemoStep1 from "../DemoStep1";
import DemoStep2 from "../DemoStep2";
import DemoStep3 from "../DemoStep3";

const steps = [
  "Enter name to order or search for previous order",
  "Update your record with most recent information",
  "Preview artwork for intant approval",
];

function DemoSubTitle() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [name, setName] = useState("");

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };

  const handleBack = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  // Callback function to handle data received from the child component
  const handleCallBack = (inputName) => {
    // Update the name in the component's state
    setName(inputName);
  };

  return (
    <div class="p-10">
      <h3>
        You only need{" "}
        <span style={{ color: "var(--primary-blue)" }}>4 steps</span> to order!
      </h3>
      <p class="text-center p-8 leading-10">
        In this step, you've logged-in to your password protected web portal and{" "}
        <br />
        you're now ready to <span>order</span> or <span>search</span> for your{" "}
        <span>previous order.</span>
      </p>

      <Box sx={{ width: "100%" }}>
        <Stepper alternativeLabel nonLinear activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit">
                <div class="text-primaryBlue text-2xl font-nats">{label}</div>
              </StepButton>
            </Step>
          ))}
        </Stepper>
        <div>
          {allStepsCompleted() ? (
            <React.Fragment>
              <Typography sx={{ mt: 10, mb: 1 }}>
                <Congratulation name={name}/>
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                {/* <Button onClick={handleReset}>Reset</Button> */}
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {/* <Typography sx={{ mt: 10, mb: 1, py: 1 }}>
                Step {activeStep + 1}
              </Typography> */}
              {(() => {
                switch (activeStep) {
                  case 0:
                    return <DemoStep1 parentCallback={handleCallBack} />;
                  case 1:
                    return <DemoStep2 name={name} />;
                  case 2:
                    return <DemoStep3 />;
                  default:
                    return null;
                }
              })()}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color="inherit"
                  disabled={activeStep <= 1}
                  onClick={handleBack}
                  sx={{backgroundColor: `white`,
                  textTransform: "none",
                  fontFamily: `NatsReg`,
                  boxShadow: '0px 5px 7px #00000030',
                  color: 'var(--primary-blue)',
                  fontSize: "20px",
                  padding: "5px 25px", mr: 1, display: activeStep <= 1 ? "none" : "block" }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button
                  sx={{
                    backgroundColor: `var(--primary-blue)`,
                    textTransform: "none",
                    fontFamily: `NatsReg`,
                    fontSize: "20px",
                    padding: "5px 25px",
                  }}
                  variant="contained"
                  onClick={handleComplete}
                >
                  {activeStep === totalSteps() - 1 ? "Submit" : "Continue"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </div>
      </Box>
    </div>
  );
}

export default DemoSubTitle;
