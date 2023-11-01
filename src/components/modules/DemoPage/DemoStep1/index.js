import React, { useEffect, useState } from "react";

function DemoStep1({ parentCallback }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    parentCallback(inputValue);
  }, [inputValue, parentCallback]);

  return (
    <div class="flex flex-wrap w-full justify-center mt-10">
      <p>
        Please <span>enter</span> your name:
      </p>
      <input
        value={inputValue}
        onChange={handleInputChange}
        class="border rounded-sm ml-10 w-1/3."
        type="text"
        name="myname"
      ></input>
    </div>
  );
}

export default DemoStep1;
