import React from "react";
import "../GetStarted.css";
import "../../../../index.css";
function Step4() {
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
              <input type="text" id="paperBrand"></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Weight/Thickness:</label>
            </div>
            <div className="rightCol">
              <input type="text" id="weight"></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Paper Color:</label>
            </div>
            <div className="rightCol">
              <input type="email" id="color"></input>
            </div>
          </div>

          <div className="inputRow">
            <div className="leftCol">
              <label>Paper Finish:</label>
            </div>
            <div className="rightCol">
              <input type="email" id="finish" placeholder="E.g. smooth, wove, laid, linen, gloss, dull, C1S, etc."></input>
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
              ></input>
              <label for="illustrator">Illustrator</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="inDesign"
                name="software"
                value="inDesign"
              ></input>
              <label for="inDesign">InDesign</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="quarkExpress"
                name="software"
                value="quarkExpress"
              ></input>
              <label for="quarkExpress">QuarkExpress</label>
            </div>

            <div className="radioInput">
              <input
                type="radio"
                id="other"
                name="software"
                value="other"
              ></input>
              <label for="other">Other</label>
              <input style={{ width: "200px" }} type="text" id="other"></input>
            </div>
          </div>
        </div>

        <div>
          <ol start="3">
            <li>
                    If you don't know the specifications of the paper, <br/>
                    you can upload your Company's Business Card Guideline, Artwork and Fonts files below. <br/>
                    Provid a vector graphic of your Company's logo in <span>.ai</span> or <span>.eps</span> file format. <br/>
                    Compress all files as either <span>.sit</span> or <span>.zip</span> file before emailing as attachment. <br/>
                    <input type="file"/>
            </li>
          </ol>
        </div>

        <div>
          <ol start="4">
            <li>
                    Also mail a few current printed business cards to:<br/>
                    <span>Oakmead Printing Inc.</span><br/>
                    Attn: enstant.com<br/>
                    233 E. Weddell Dr., Suite G<br/>
                    Sunnyvale, CA 94089<br/>
            </li>
          </ol>
        </div>

      </div>
    </>
  );
}

export default Step4;
