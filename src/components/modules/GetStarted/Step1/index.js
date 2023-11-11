import React from "react";
import "../GetStarted.css";

function Step1({ formData, setFormData }) {
  return (
    <>
      <h2>
        Let's get to know <span>about you</span>
      </h2>
      <div className="inputContainer">
        <div>
          <div className="inputRow">
            <div className="leftCol">
              <label>Name:</label>
            </div>
            <div className="rightCol">
              {/* <select id="prefix">
                                <option defaultValue="-">Select</option>
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                                <option value="Miss.">Miss</option>
                                <option value="Dr.">Dr.</option>
                            </select> */}
              <input
                type="text"
                id="name"
                value={formData.name}
                required
                onChange={(event) =>
                  setFormData({ ...formData, name: event.target.value })
                }
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Job Title:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="jobTitle"
                value={formData.jobTitle}
                required
                onChange={(event) =>
                  setFormData({ ...formData, jobTitle: event.target.value })
                }
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Phone:</label>
            </div>
            <div className="rightCol">
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                required
                onChange={(event) =>
                  setFormData({ ...formData, phone: event.target.value })
                }
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Email:</label>
            </div>
            <div className="rightCol">
              <input
                type="email"
                id="email"
                value={formData.email}
                required
                onChange={(event) =>
                  setFormData({ ...formData, email: event.target.value })
                }
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step1;
