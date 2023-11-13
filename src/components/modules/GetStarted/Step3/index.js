import React from "react";
import "../GetStarted.css";
import "../../../../index.css";

function Step3({ formData, setFormData }) {
  const handleRadioChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };
  return (
    <>
      <h2>
        About your business cards <span>ordering process</span>
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
              <input
                type="text"
                id="decisionMakerName"
                value={formData.decisionMakerName}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    decisionMakerName: e.target.value,
                  });
                }}
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
                id="decisionMakerJobTitle"
                value={formData.decisionMakerJobTitle}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    decisionMakerJobTitle: e.target.value,
                  });
                }}
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
                id="decisionMakerEmail"
                value={formData.decisionMakerEmail}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    decisionMakerEmail: e.target.value,
                  });
                }}
              ></input>
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
                checked={formData.orderFrequency === "daily"}
                onChange={() => handleRadioChange("orderFrequency", "daily")}
              ></input>
              <label for="daily">Daily</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="weekly"
                name="orderFrequency"
                value="weekly"
                checked={formData.orderFrequency === "weekly"}
                onChange={() => handleRadioChange("orderFrequency", "weekly")}
              ></input>
              <label for="weekly">Weekly</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="monthly"
                name="orderFrequency"
                value="monthly"
                checked={formData.orderFrequency === "monthly"}
                onChange={() => handleRadioChange("orderFrequency", "monthly")}
              ></input>
              <label for="monthly">Monthly</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="other"
                name="orderFrequency"
                value="other"
                checked={formData.orderFrequency === "other"}
                onChange={() => handleRadioChange("orderFrequency", "other")}
              ></input>
              <label for="other">Other</label>
              <input
                style={{ width: "200px" }}
                type="text"
                id="other"
                onChange={(e) =>
                  handleRadioChange("orderFrequency", e.target.value)
                }
              ></input>
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
                name="currentOrderRequestMethod"
                value="fax"
                checked={formData.currentOrderRequestMethod === "fax"}
                onChange={() =>
                  handleRadioChange("currentOrderRequestMethod", "fax")
                }
              ></input>
              <label for="fax">Fax</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="email"
                name="currentOrderRequestMethod"
                value="email"
                checked={formData.currentOrderRequestMethod === "email"}
                onChange={() =>
                  handleRadioChange("currentOrderRequestMethod", "email")
                }
              ></input>
              <label for="email">Email</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="onlineSystem"
                name="currentOrderRequestMethod"
                value="onlineSystem"
                checked={formData.currentOrderRequestMethod === "onlineSystem"}
                onChange={() =>
                  handleRadioChange("currentOrderRequestMethod", "onlineSystem")
                }
              ></input>
              <label for="onlineSystem">Online System</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="other"
                name="currentOrderRequestMethod"
                value="other"
                checked={formData.currentOrderRequestMethod === "other"}
                onChange={() =>
                  handleRadioChange("currentOrderRequestMethod", "other")
                }
              ></input>
              <label for="other">Other</label>
              <input
                style={{ width: "200px" }}
                type="text"
                id="other"
                onChange={(e) =>
                  handleRadioChange("currentOrderRequestMethod", e.target.value)
                }
              ></input>
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
                name="currentOrderPlaceMethod"
                value="fax"
                checked={formData.currentOrderPlaceMethod === "fax"}
                onChange={() =>
                  handleRadioChange("currentOrderPlaceMethod", "fax")
                }
              ></input>
              <label for="fax">Fax</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="email"
                name="currentOrderPlaceMethod"
                value="email"
                checked={formData.currentOrderPlaceMethod === "email"}
                onChange={() =>
                  handleRadioChange("currentOrderPlaceMethod", "email")
                }
              ></input>
              <label for="email">Email</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="onlineSystem"
                name="currentOrderPlaceMethod"
                value="onlineSystem"
                checked={formData.currentOrderPlaceMethod === "onlineSystem"}
                onChange={() =>
                  handleRadioChange("currentOrderPlaceMethod", "onlineSystem")
                }
              ></input>
              <label for="onlineSystem">Online System</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="other"
                name="currentOrderPlaceMethod"
                value="other"
                checked={formData.currentOrderPlaceMethod === "other"}
                onChange={() =>
                  handleRadioChange("currentOrderPlaceMethod", "other")
                }
              ></input>
              <label for="other">Other</label>
              <input
                style={{ width: "200px" }}
                type="text"
                id="other"
                onChange={(e) =>
                  handleRadioChange("currentOrderPlaceMethod", e.target.value)
                }
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step3;
