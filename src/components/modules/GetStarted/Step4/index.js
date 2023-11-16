import React from "react";
import "../GetStarted.css";
import "../../../../index.css";

function Step4({ formData, setFormData }) {

  const handleRadioChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFormData({ ...formData, businessCardFile: file });
  };

  return (
    <>
      <h2>
        About your <span>business cards</span>
      </h2>
      <p className="description">(Optional)</p>
      <div className="inputContainer step4Container">
        <div>
          <p>1. What is your business card paper specifications?</p>

          <div className="inputRow">
            <div className="leftCol">
              <label>Paper Brand:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="paperBrand"
                value={formData.paperBrand}
                onChange={(event) =>
                  setFormData({ ...formData, paperBrand: event.target.value })
                }
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Weight/Thickness:</label>
            </div>
            <div className="rightCol">
              <input
                type="text"
                id="weight"
                value={formData.weight}
                onChange={(event) =>
                  setFormData({ ...formData, weight: event.target.value })
                }
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Paper Color:</label>
            </div>
            <div className="rightCol">
              <input
                type="email"
                id="color"
                value={formData.color}
                onChange={(event) =>
                  setFormData({ ...formData, color: event.target.value })
                }
              ></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Paper Finish:</label>
            </div>
            <div className="rightCol">
              <input
                type="email"
                id="paperFinish"
                placeholder="E.g. smooth, wove, laid, linen, gloss, dull, C1S, etc."
                value={formData.paperFinish}
                onChange={(event) =>
                  setFormData({ ...formData, paperFinish: event.target.value })
                }
              ></input>
            </div>
          </div>
        </div>

        <div>
          <p>2. What application is your artwork created in?</p>

          <div className="radioInputContainer">
            <div className="radioInput">
              <input
                type="radio"
                id="Illustrator"
                name="software"
                value="Illustrator"
                checked={formData.software === "Illustrator"}
                onChange={() => handleRadioChange("software", "Illustrator")}
              ></input>
              <label for="Illustrator">Illustrator</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="InDesign"
                name="software"
                value="InDesign"
                checked={formData.software === "InDesign"}
                onChange={() => handleRadioChange("software", "InDesign")}
              ></input>
              <label for="InDesign">InDesign</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="QuarkExpress"
                name="software"
                value="QuarkExpress"
                checked={formData.software === "QuarkExpress"}
                onChange={() => handleRadioChange("software", "QuarkExpress")}
              ></input>
              <label for="QuarkExpress">QuarkExpress</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="other"
                name="software"
                value="other"
                checked={formData.software === "other"}
                onChange={() => handleRadioChange("software", "other")}
              ></input>
              <label for="other">Other</label>
              <input
                style={{ width: "200px" }}
                type="text"
                id="other"
                onChange={(e) =>
                  handleRadioChange("software", e.target.value)
                }
              ></input>
            </div>
          </div>
        </div>

        <div>
          <ol start="3">
            <li>
            <a href="mailto:orders@enstant.com"><span><u>Click here</u></span></a> to email your Company's Business Card Guideline, Artwork and Fonts files. <br/>
            Provide a vector graphic of your Company's Logo in <span>.ai</span> or <span>.eps</span> file format. <br/>
            Compress all files as either <span>.sit</span> or <span>.zip</span> file before emailing as attachment.
            </li>
          </ol>
        </div>

        <div>
          <ol start="4">
            <li>
              Also mail a few current printed business cards to:
              <br />
              <span>Oakmead Printing Inc.</span>
              <br />
              Attn: enstant.com
              <br />
              233 E. Weddell Dr., Suite G<br />
              Sunnyvale, CA 94089
              <br />
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default Step4;
