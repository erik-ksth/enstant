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
        About your business card <span>ordering process</span>
      </h2>
      <p className="description">(Optional)</p>
      <div className="inputContainer">
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
                id="illustrator"
                name="software"
                value="illustrator"
                checked={formData.software === "illustrator"}
                onChange={() => handleRadioChange("software", "illustrator")}
              ></input>
              <label for="illustrator">Illustrator</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="inDesign"
                name="software"
                value="inDesign"
                checked={formData.software === "inDesign"}
                onChange={() => handleRadioChange("software", "inDesign")}
              ></input>
              <label for="inDesign">InDesign</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="quarkExpress"
                name="software"
                value="quarkExpress"
                checked={formData.software === "quarkExpress"}
                onChange={() => handleRadioChange("software", "quarkExpress")}
              ></input>
              <label for="quarkExpress">QuarkExpress</label>
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
                  handleRadioChange("otherFrequency", e.target.value)
                }
              ></input>
            </div>
          </div>
        </div>

        <div>
          <ol start="3">
            <li>
              If you don't know the specifications of the paper, <br />
              you can upload your Company's Business Card Guideline, Artwork and
              Fonts files below. <br />
              Provid a vector graphic of your Company's logo in <span>
                .ai
              </span>{" "}
              or <span>.eps</span> file format. <br />
              Compress all files as either <span>.sit</span> or{" "}
              <span>.zip</span> file before emailing as attachment. <br />
              <input type="file" onChange={handleFileChange} />
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
