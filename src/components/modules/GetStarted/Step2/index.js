import React from "react";
import "../GetStarted.css";

function Step2({ formData, setFormData }) {
  return (
    <>
      <h2>
        Let us know know about <span>your company</span>
      </h2>
      <p className="description">(Optional)</p>
      <div className="inputContainer">
        <div>
          <div className="inputRow">
            <div className="leftCol">
              <label>Company Name:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="companyName"
                value={formData.companyName}
                onChange={(e) => {
                  setFormData({ ...formData, companyName: e.target.value });
                }}
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Address Line 1:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="addressLine1"
                value={formData.addressLine1}
                onChange={(e) => {
                  setFormData({ ...formData, addressLine1: e.target.value });
                }}
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Address Line 2:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="addressLine2"
                value={formData.addressLine2}
                onChange={(e) => {
                  setFormData({ ...formData, addressLine2: e.target.value });
                }}
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>City:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value });
                }}
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>State:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="state"
                value={formData.state}
                onChange={(e) => {
                  setFormData({ ...formData, state: e.target.value });
                }}
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Zip Code:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="zip"
                value={formData.zipCode}
                onChange={(e) => {
                  setFormData({ ...formData, zipCode: e.target.value });
                }}
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Website:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="website"
                value={formData.website}
                onChange={(e) => {
                  setFormData({ ...formData, website: e.target.value });
                }}
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Number of Employees:</label>
            </div>
            <div className="rightCol">
              <input
                type="number"
                id="employeesNo"
                value={formData.numberOfEmployees}
                onChange={(e) => {
                  setFormData({ ...formData, numberOfEmployees: e.target.value });
                }}
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Number of Locations:</label>
            </div>
            <div className="rightCol">
              <input
                type="number"
                id="LocationNo"
                value={formData.numberOfLocations}
                onChange={(e) => {
                  setFormData({ ...formData, numberOfLocations: e.target.value });
                }}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Step2;
