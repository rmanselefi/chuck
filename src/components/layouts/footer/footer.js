import React from "react";
import "./footer.css";
import right from "../../../assets/assets_Homework_Front-End_01/path-copy-3@2x.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-text">GOT JOKES GET PAID FOR SUBMITTING</div>
      <div className="joke-link-footer">
        <button className="btn">
          SUBMIT JOKE
          <img
            alt="show more"
            className="load-more-img"
            src={right}
            width="15"
            height="15"
          />
        </button>
      </div>
    </div>
  );
}

export default Footer;
