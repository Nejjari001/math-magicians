/* eslint-disable quotes */
import React from "react";

const divSytles = {
  textAlign: "center",
  background: "rgba(40, 0, 199, 0.05)",
  bottom: 0,
  position: "absolute",
  width: "100%",
};
const footerStyles = {
  padding: 10,
  color: "rgba(60, 13, 14, 0.48)",
  fontStyle: "normal",
};
const hrFooter = { borderColor: "rgba(20, 0, 20, 0.13)" };

const Footer = () => (
  <div style={divSytles}>
    <hr style={hrFooter} />
    <p style={footerStyles}>Designed and Developed by Nejjari Abdelhafid</p>
  </div>
);

export default Footer;
