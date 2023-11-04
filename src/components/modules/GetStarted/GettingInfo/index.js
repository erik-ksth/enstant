import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Step1 from "../Step1";
import Step2 from "../Step2";
import Step3 from "../Step3";
import Step4 from "../Step4";
import Step5 from "../Step5";
import Step6 from "../Step6";

const theme = createTheme({
  typography: {
    fontFamily: "NatsReg, sans-serif",
    fontSize: "25px",
  },
});

const steps = [
  `Let’s get to know about you`,
  "Let us know about your company",
  "About your business cards",
  "About your business cards ordering process",
  "Questions or Comments",
];

export default function GettingInfo() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepOptional = (step) => {
    return step === 1 || step === 2 || step === 3;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  return (
    <ThemeProvider sx={{ maxWidth: "1500px" }} theme={theme}>
      <div style={{ paddingBottom: "50px" }}>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Step6/>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
            {(() => {
                  switch (activeStep) {
                    case 0:
                      return <Step1/>;
                    case 1:
                      return <Step2/>;
                    case 2:
                      return <Step3/>;
                    case 3:
                      return <Step4/>;
                    case 4:
                      return <Step5/>;
                    default:
                      return null;
                  }
                })()}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="contained"
                sx={{
                  backgroundColor: `white`,
                  textTransform: "none",
                  fontFamily: `NatsReg`,
                  boxShadow: "0px 5px 7px #00000030",
                  color: "var(--primary-blue)",
                  fontSize: "20px",
                  padding: "5px 25px",
                  mr: 1,
                }}
              >
                BACK
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {isStepOptional(activeStep) && (
                <Button
                  color="inherit"
                  onClick={handleSkip}
                  sx={{ mr: 1, fontSize: "20px" }}
                >
                  Skip
                </Button>
              )}

              <Button
                variant="contained"
                onClick={handleNext}
                sx={{ fontSize: "20px " }}
              >
                {activeStep === steps.length - 1 ? "Submit" : "Continue"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </ThemeProvider>
  );
}
