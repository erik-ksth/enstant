import React from "react";
import '../GetStarted.css'

function Step1() {
    return (
        <>
            <h2>Let's get to know <span>about you</span></h2>
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
                            <label>Phone:</label>
                        </div>
                        <div className="rightCol">
                            <input type="tel" id="phone"></input>
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
            </div>
        </>
    )
}

export default Step1;