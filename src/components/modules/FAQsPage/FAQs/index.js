import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import faqData from "./faqData";

const theme = createTheme({
  typography: {
    fontFamily: "NatsReg, sans-serif",
    fontSize: "25px",
  },
});

const FaqItem = ({ question, answer }) => {
  const addLineBreaks = (text) => {
    return text.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br/>
      </React.Fragment>
    ));
  };
  return (
    <Accordion style={faqsBox}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>{question}</Typography>
      </AccordionSummary>
      <hr/>
      <AccordionDetails>
        <Typography>{addLineBreaks(answer)}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

function FAQs() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div class="w-10/12 max-w-screen-xl mb-12" id="faqs">
          <h3 class="text-left mt-20">
            Frequently Asked Questions (<span>FAQs</span>)
          </h3>

          <div class="w-full flex flex-col gap-y-4 py-5">
            {faqData.map((faq) => (
              <FaqItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
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
