import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./media.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "NatsReg, sans-serif",
    fontSize: "25px",
  },
});

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    question: "",
  });

  const validateForm = () => {
    const requiredFields = ["firstName", "lastName", "email", "phone"];
    for (const field of requiredFields) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Contact Form Data: ", formData);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <div class="flex flex-row flex-wrap gap-x-10 my-10 justify-center">
        <form className="contantFormContainer">
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
              value={formData.firstName}
              onChange={(event) =>
                setFormData({ ...formData, firstName: event.target.value })
              }
            />
            <TextField
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              size="small"
              required
              value={formData.lastName}
              onChange={(event) =>
                setFormData({ ...formData, lastName: event.target.value })
              }
            />
          </div>
          <TextField
            id="outlined-basic"
            label="Company"
            variant="outlined"
            size="small"
            value={formData.company}
            onChange={(event) =>
              setFormData({ ...formData, company: event.target.value })
            }
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            size="small"
            required
            value={formData.email}
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
          <TextField
            id="phone"
            label="Phone No"
            variant="outlined"
            size="small"
            required
            value={formData.phone}
            onChange={(event) =>
              setFormData({ ...formData, phone: event.target.value })
            }
          />
          <textarea
            name="question"
            placeholder="How can I help you?"
            style={{
              border: "1px #00000045 solid",
              borderRadius: "4px",
              padding: "10px",
            }}
            value={formData.question}
            onChange={(event) =>
              setFormData({ ...formData, question: event.target.value })
            }
          />
          <button type="submit" className="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
        <div class="flex flex-col justify-start gap-y-5 px-5">
          <h3 class="text-left">
            <span>Oakmead Printing Inc.</span>
          </h3>
          <p>
            <span>Address:</span> 233 East Weddell Dr., Suite G, Sunnyvale, CA
            94089
          </p>
          <p>
            <span>Tel:</span> <a href="tel: +14087345505">+1 (408) 734-5505</a>
          </p>
          <p>
            <span>Fax:</span> <a href="fax: +14087343323">+1 (408) 734-3323</a>
          </p>
          <p>
            <span>Email:</span>{" "}
            <a href="mailto:sales@enstant.com">sales@enstant.com</a>
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
