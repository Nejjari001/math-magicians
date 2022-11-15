/* eslint-disable quotes */
import React from "react";

const quotesStyles = { textAlign: "center" };
const headerStyles = {
  marginBottom: 40,
  color: "rgba(20, 0, 20, 0.5)",
};
const pStyles = {
  fontStyle: "italics",
};

const Quotes = () => (
  <div style={quotesStyles}>
    <h2 style={headerStyles}>Maths qoute of the day!</h2>
    <hr className="hrQuotes" />
    <p style={pStyles}>Wherever there is number, there is beauty.!</p>
    <hr className="hrQuotesBottom" />
  </div>
);

export default Quotes;
