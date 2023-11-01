import React, { useState } from "react";
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
      <div class="w-full max-w-screen-xl bg-white flex flex-col justify-center">
        <div>
          <Table striped bordered hover class="w-9/12">
            <tbody>
              <tr class="border-solid border-2 border-primaryBlue">
                <td class="bg-primaryBlue text-white text-center border-solid border-white border-b-2">Ordered</td>
                <td>{currentDate}</td>
                <td class="bg-primaryBlue text-white text-center border-solid border-white border-b-2">by:</td>
                <td>{props.name}</td>
              </tr>
            </tbody>
            <tbody>
              <tr class="border-solid border-2 border-primaryBlue">
                <td class="bg-primaryBlue text-white text-center">Modified</td>
                <td>{currentDate}</td>
                <td class="bg-primaryBlue text-white text-center">by:</td>
                <td>{props.name}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default DemoStep2;
