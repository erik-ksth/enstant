import React from "react";
import "../GetStarted.css";
import "../../../../index.css";

function Step4({ formData, setFormData }) {
  return (
    <>
      <h2>Questions or Comments</h2>
      <p className="description">(Optional)</p>
      <textarea
        id="comment"
        name="comment"
        rows="5"
        value={formData.comments}
        onChange={(event) =>
          setFormData({ ...formData, comment: event.target.value })
        }
      ></textarea>
    </>
  );
}

export default Step4;
