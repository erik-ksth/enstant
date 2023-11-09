import React, { useState } from "react";
import "./media.css"
import Table from "react-bootstrap/Table";

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function DemoStep2(props) {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <>
      <div class="w-full max-w-screen-2xl bg-white flex flex-col justify-center p-10">
        <div class="flex flex-col justify-center">
          <Table striped bordered hover>
            <tbody>
              <tr class="border-solid border-2 border-primaryBlue">
                <td
                  style={statusBox}
                  class="border-solid border-white border-b-2"
                >
                  Ordered
                </td>
                <td style={customerData}>{currentDate}</td>
                <td
                  style={statusBox}
                  class="border-solid border-white border-b-2"
                >
                  by:
                </td>
                <td style={customerData}>{props.name}</td>
              </tr>
            </tbody>
            <tbody>
              <tr class="border-solid border-2 border-primaryBlue">
                <td style={statusBox}>Modified</td>
                <td style={customerData}>{currentDate}</td>
                <td style={statusBox}>by:</td>
                <td style={customerData}>{props.name}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        {/* Demo Input and Preview */}
        <div class="flex flex-wrap justify-center py-10 gap-x-5">
          {/* Demo Preview */}
          <div class="flex flex-col items-center w-6/12 p-5 gap-y-5">
              <h3 class="text-md">Preview:</h3>
              <div class="bg-blue-100 w-full h-64"></div>
              <p>Front-Side</p>
              <div class="bg-blue-100 w-full h-64"></div>
              <p>Back-Side</p>
          </div>
          {/* Demo Input */}
          <div className="demoInputContainer">
              <div class="w-full border border-2 border-gray flex flex-col">

                <div style={inputContainer}>
                  <div style={firstInputCol}>Qty set(s):</div>
                  <div style={secondInputCol}>
                    <input
                      class="border rounded-sm w-12 mr-5"
                      type="number"
                      name="qty"
                    ></input>
                    Qty 250 in each set
                  </div>
                </div>

                <div style={inputContainer}>
                  <div style={firstInputCol}>Name:</div>
                  <div style={secondInputCol}>
                    <input
                      defaultValue={props.name}
                      class="border rounded-sm w-full px-3"
                      type="text"
                      name="myname"
                    ></input>
                  </div>
                </div>

                <div style={inputContainer}>
                  <div style={firstInputCol}>Title line 1:</div>
                  <div style={secondInputCol}>
                    <input
                      defaultValue="VP of Operation"
                      class="border rounded-sm w-full px-3"
                      type="text"
                      name="title"
                    ></input>
                  </div>
                </div>

                <div style={inputContainer}>
                  <div style={firstInputCol}>Select an Office</div>
                  <div style={secondInputCol}>
                    <input
                      defaultValue="Sunnyvale, CA"
                      class="border rounded-sm w-full px-3"
                      type="text"
                      name="office"
                    ></input>
                  </div>
                </div>

                <div style={inputContainer}>
                  <div style={firstInputCol}>Address:</div>
                  <div style={secondInputCol}>
                    <input
                      defaultValue="233 Weddel Dr., Suite G"
                      class="border rounded-sm w-full px-3"
                      type="text"
                      name="address"
                    ></input>
                  </div>
                </div>

                <div style={inputContainer}>
                  <div style={firstInputCol}>City, State Zip:</div>
                  <div style={secondInputCol}>
                    <input
                      defaultValue="Sunnyvale, CA 94089"
                      class="border rounded-sm w-full px-3"
                      type="text"
                      name="city"
                    ></input>
                  </div>
                </div>

                <div style={inputContainer}>
                  <div style={firstInputCol}>Main Phone:</div>
                  <div style={secondInputCol}>
                    <input
                      defaultValue="(408)734-5505"
                      class="border rounded-sm w-full px-3"
                      type="text"
                      name="city"
                    ></input>
                  </div>
                </div>

                <div style={inputContainer}>
                  <div style={firstInputCol}>Fax:</div>
                  <div style={secondInputCol}>
                    <input
                      defaultValue="(408)734-3323"
                      class="border rounded-sm w-full px-3"
                      type="text"
                      name="city"
                    ></input>
                  </div>
                </div>

                <div style={inputContainer}>
                  <div style={firstInputCol}>Email:</div>
                  <div style={secondInputCol}>
                    <input
                      defaultValue={`${props.name.toLowerCase().replace(/\s/g, "")}@easy-instant.com`}
                      class="border rounded-sm w-full px-3"
                      type="text"
                      name="city"
                    ></input>
                  </div>
                </div>

              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default DemoStep2;

const statusBox = {
  backgroundColor: "var(--primary-blue)",
  color: "white",
  textAlign: "center",
  padding: "10px 20px",
};

const customerData = {
  paddingLeft: "20px",
};

const inputContainer = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '5%',
}

const firstInputCol = {
  width: '35%',
  color: 'var(--primary-blue)',
  marginRight: '20px'
}

const secondInputCol = {
  width: '65%'
}