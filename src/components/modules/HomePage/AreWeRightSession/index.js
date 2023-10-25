import React from "react";
import "../../../../index.css";

function AreWeRight() {
  return (
    <div style={parentContainer}>
      <h2>
        Are we <span>Right</span> for your business?
      </h2>

      <div style={bodyParaContainer}>

        <p>
          enstant.com is ideal for you if your company or organization orders
          business cards <span>frequently.</span>
        </p>
        <p>
          That means if your company or organization has a
          <span> large number </span>
          of employees, independent agents, multiple offices or is experiencing
          a period of rapid growth, i.e., hi-tech, financial or hospitality
          companies or organizations, you will<span> benefit </span>from
          enstant.com's On-Line Tool and Web Portal.
        </p>
        <p>
          enstant.com understands the benefit of quickly and efficiently
          providing your staff with the basic, yet important
          <span> sales tool </span>- the business card.
        </p>

        <img style={topQuote} src="/images/icons/quote_icon.svg"></img>
        <img style={buttomQuote} src="/images/icons/quote_icon.svg"></img>
      </div>
    </div>
  );
}

export default AreWeRight;

const parentContainer = {
    padding: '3% 0',
    backgroundColor: 'white',
    overflow: 'hidden',
}

const bodyParaContainer = {
    padding: '0.5% 10%',
    marginBottom: '-10%'
}

const topQuote = {
    position: 'relative',
    top: '-470px',
    left: '-12%',
}

const buttomQuote = {
    position: 'relative',
    bottom: '50px',
    right: '-73%',
    transform: 'rotate(180deg)'
}