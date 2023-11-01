import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "NatsReg, sans-serif",
    fontSize: "25px",
  },
});

function FAQs() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div class="w-10/12 max-w-screen-xl">
          <h3 class="text-left mt-20">
            Frequently Asked Questions (<span>FAQs</span>)
          </h3>

          <div class="w-full flex flex-col gap-y-4 py-5">
            <Accordion style={faqsBox}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>What service does enstant.com provide?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  enstant.com provides a web-based business card management
                  solution to growing and established companies looking for
                  quality, consistency and speed. enstant.com provides a
                  quicker, easier and smarter method of requesting, proofing,
                  managing and tracking corporate business cards online.
                </Typography>
              </AccordionDetails>

            </Accordion>
            <Accordion style={faqsBox}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography>How does enstant.com do this?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  enstant .com sets up a password-protected website with your
                  company's business card specifications (i.e., logo, font,
                  style, layout, and ink colors) preformatted to ensure
                  consistency for all your orders. enstant.com allows you to
                  place orders, proof for typos instantly, manage and track
                  up-to-the-minute shipping status and order history from any
                  computer connected to the internet at any time!
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

export default FAQs;

const faqsBox = {
  fontFamily: "NatsReg",
  backgroundColor: "#FFFFFF80",
  boxShadow: "0 10px 12px #00000010",
  borderRadius: "5px",
  backdropFilter: "blur(10px)",
};
