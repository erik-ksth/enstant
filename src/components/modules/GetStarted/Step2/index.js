import React from "react";
import '../GetStarted.css'

function Step2() {
    return (
        <>
            <h2>Let us know know about <span>your company</span></h2>
            <p className="description">(Optional)</p>
            <div className="inputContainer">
                <div>

                    <div className="inputRow">
                        <div className="leftCol">
                            <label>Company Name:</label>
                        </div>
                        <div className="rightCol">
                            <input type="text" id="companyName"></input>
                        </div>
                    </div>

                    <div className="inputRow">
                        <div className="leftCol">
                            <label>Address Line 1:</label>
                        </div>
                        <div className="rightCol">
                            <input type="text" id="addressLine1"></input>
                        </div>
                    </div>

                    <div className="inputRow">
                        <div className="leftCol">
                            <label>Address Line 2:</label>
                        </div>
                        <div className="rightCol">
                            <input type="text" id="addressLine2"></input>
                        </div>
                    </div>

                    <div className="inputRow">
                        <div className="leftCol">
                            <label>City:</label>
                        </div>
                        <div className="rightCol">
                            <input type="text" id="city"></input>
                        </div>
                    </div>
                    
                    <div className="inputRow">
                        <div className="leftCol">
                            <label>State:</label>
                        </div>
                        <div className="rightCol">
                            <input type="text" id="state"></input>
                        </div>
                    </div>

                    <div className="inputRow">
                        <div className="leftCol">
                            <label>Zip Code:</label>
                        </div>
                        <div className="rightCol">
                            <input type="text" id="zip"></input>
                        </div>
                    </div>

                    <div className="inputRow">
                        <div className="leftCol">
                            <label>Website:</label>
                        </div>
                        <div className="rightCol">
                            <input type="text" id="website"></input>
                        </div>
                    </div>

                    <div className="inputRow">
                        <div className="leftCol">
                            <label>Number of Employees:</label>
                        </div>
                        <div className="rightCol">
                            <input type="number" id="employeesNo"></input>
                        </div>
                    </div>

                    <div className="inputRow">
                        <div className="leftCol">
                            <label>Number of Locations:</label>
                        </div>
                        <div className="rightCol">
                            <input type="number" id="LocationNo"></input>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Step2;