import React, { useState } from "react";

function ReferralForm() {
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          recipientName1: "",
          recipientEmail1: "",
          recipientName2: "",
          recipientEmail2: "",
          recipientName3: "",
          recipientEmail3: "",
        });

        const validateForm = () => {
          const requiredFields = ["name", "email", "recipientName1", "recipientEmail1"];
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
        }

  return (
    <div style={referralForm}>
      <p>
        Please fill out the form below to refer your Company's Decision Makers
        about <span>enstant.com</span> and how they can simplify & accelerate
        Business Card ordering processes. Thank you for your referral.
      </p>
      <form style={inputContainer}>
          <div style={inputRowContainer}>
               <input
               placeholder="Name"
               id="name"
               type="text"
               style={form}
               required
               value={formData.name}
               onChange={(event) =>
                    setFormData({ ...formData, name: event.target.value })
               }
               />
               <input
               placeholder="Email"
               id="email"
               style={form}
               required
               value={formData.email}
               onChange={(event) =>
                    setFormData({ ...formData, email: event.target.value })
               }
               />
          </div>
          <div style={inputRowContainer}>
               <input
               placeholder="Recipient's Name"
               id="recipientName1"
               type="text"
               style={form}
               required
               value={formData.recipientName1}
               onChange={(event) =>
                    setFormData({ ...formData, recipientName1: event.target.value })
               }
               />
               <input
               placeholder="Recipient's Email"
               id="recipientEmail1"
               type="email"
               style={form}
               required
               value={formData.recipientEmail1}
               onChange={(event) =>
                    setFormData({ ...formData, recipientEmail1: event.target.value })
               }
               />
          </div>
          <div style={inputRowContainer}>
               <input
               placeholder="Recipient's Name"
               id="recipientName2"
               type="text"
               style={form}
               value={formData.recipientName2}
               onChange={(event) =>
                    setFormData({ ...formData, recipientName2: event.target.value })
               }
               />
               <input
               placeholder="Recipient's Email"
               id="recipientEmail2"
               type="email"
               style={form}
               value={formData.recipientEmail2}
               onChange={(event) =>
                    setFormData({ ...formData, recipientEmail2: event.target.value })
               }
               />
          </div>
          <div style={inputRowContainer}>
               <input
               placeholder="Recipient's Name"
               id="recipientName3"
               type="text"
               style={form}
               value={formData.recipientName3}
               onChange={(event) =>
                    setFormData({ ...formData, recipientName3: event.target.value })
               }
               />
               <input
               placeholder="Recipient's Email"
               id="recipientEmail3"
               type="email"
               style={form}
               value={formData.recipientEmail3}
               onChange={(event) =>
                    setFormData({ ...formData, recipientEmail3: event.target.value })
               }
               />
          </div>
          <button className="button" style={{width: "100px", marginTop: "30px"}}>
               Submit
          </button>
      </form>
    </div>
  );
}

export default ReferralForm;


const referralForm = {
     maxWidth: "900px",
     width: "95%"
}

const inputContainer = {
     margin: "5% 0",
     padding: "5%",
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     backgroundColor: "white",
     borderRadius: "7px",
     border: "1px solid #00000030",
}

const inputRowContainer = {
     width: "100%",
     display: "flex",
     flexDirection: "row",
     justifyContent: "space-evenly",
     margin: "2% 0",
}

const form = {
     width: "auto",
     width: "45%",
     backgroundColor: "var(--background-color)",
     borderRadius: "3px",
     padding: '0 5px',
}