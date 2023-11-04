import React from "react";
import "../GetStarted.css";
import "../../../../index.css";

function Step3() {
  return (
    <>
      <h2>
        About your <span>business cards</span>
      </h2>
      <p className="description">(Optional)</p>
      <div className="inputContainer">
        <div>
          <p>1. Who decide business card vendor in your company?</p>

          <div className="inputRow">
            <div className="leftCol">
              <label>Name:</label>
            </div>
            <div className="rightCol">
              <input type="text" id="name"></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Job Title:</label>
            </div>
            <div className="rightCol">
              <input type="text" id="jobTitle"></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Email:</label>
            </div>
            <div className="rightCol">
              <input type="email" id="email"></input>
            </div>
          </div>
        </div>

        <div>
          <p>2. How often does your company order business cards?</p>

          <div className="radioInputContainer">
            <div className="radioInput">
              <input
                type="radio"
                id="daily"
                name="orderFrequency"
                value="daily"
              ></input>
              <label for="daily">Daily</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="weekly"
                name="orderFrequency"
                value="weekly"
              ></input>
              <label for="weekly">Weekly</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="monthly"
                name="orderFrequency"
                value="monthly"
              ></input>
              <label for="monthly">Monthly</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="other"
                name="orderFrequency"
                value="other"
              ></input>
              <label for="other">Other</label>
              <input style={{ width: "200px" }} type="text" id="other"></input>
            </div>
          </div>
        </div>

        <div>
          <p>
            3. How are your business cards currently requested inside your
            company?
          </p>

          <div className="radioInputContainer">
            <div className="radioInput">
              <input
                type="radio"
                id="fax"
                name="currentOrderMethod"
                value="fax"
              ></input>
              <label for="fax">Fax</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="email"
                name="currentOrderMethod"
                value="email"
              ></input>
              <label for="email">Email</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="onlineSystem"
                name="currentOrderMethod"
                value="onlineSystem"
              ></input>
              <label for="onlineSystem">Online System</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="other"
                name="currentOrderMethod"
                value="other"
              ></input>
              <label for="other">Other</label>
              <input style={{ width: "200px" }} type="text" id="other"></input>
            </div>
          </div>
        </div>

        <div>
          <p>4. How are business cards currently placed with your vendor?</p>

          <div className="radioInputContainer">
            <div className="radioInput">
              <input
                type="radio"
                id="fax"
                name="currentOrderMethod"
                value="fax"
              ></input>
              <label for="fax">Fax</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="email"
                name="currentOrderMethod"
                value="email"
              ></input>
              <label for="email">Email</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="onlineSystem"
                name="currentOrderMethod"
                value="onlineSystem"
              ></input>
              <label for="onlineSystem">Online System</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="other"
                name="currentOrderMethod"
                value="other"
              ></input>
              <label for="other">Other</label>
              <input style={{ width: "200px" }} type="text" id="other"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step3;
