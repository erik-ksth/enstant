import React from "react";
import TextField from "@mui/material/TextField";
import Button from "../../../elements/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "NatsReg, sans-serif",
    fontSize: "25px",
  },
});

export default function ContactForm() {
  return (
    <ThemeProvider theme={theme}>
        <div class="flex flex-row flex-wrap gap-x-10 my-10 justify-center">
          <div class="w-2/5 bg-white p-10 rounded-lg flex flex-col gap-y-10 shadow-lg">
            <h3 class="text-left">
              Love to <span>hear</span> from you!
            </h3>
            <div class="flex gap-x-5">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                size="small"
                required
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                size="small"
                required
              />
            </div>
            <TextField
              id="outlined-basic"
              label="Company"
              variant="outlined"
              size="small"
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              id="phone"
              label="Phone No"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              id="text-area"
              label="How can we help you?"
              variant="outlined"
              size="small"
              required
            />
            <Button label={"Submit"}></Button>
          </div>
          <div class="flex flex-col justify-start gap-y-5">
            <h3 class="text-left">
              <span>Oakmead Printing Inc.</span>
            </h3>
            <p>
              <span>Address:</span> 233 East Weddell Dr., Suite G, Sunnyvale, CA
              94089
            </p>
            <p>
              <span>Tel:</span> +1 (408) 734-5505
            </p>
            <p>
              <span>Fax:</span> +1 (408) 734-3323
            </p>
            <p>
              <span>Email:</span> sales@enstant.com
            </p>
            <div style={{ width: "100%", height: "400px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.6484313054166!2d-122.02270042306053!3d37.3981457337642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7b48dd20af9%3A0x40f58f978b3c27c2!2sOakmead%20Printing%20Inc.!5e0!3m2!1sen!2sus!4v1698798451563!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen=""
              />
            </div>
          </div>
        </div>
    </ThemeProvider>
  );
}
