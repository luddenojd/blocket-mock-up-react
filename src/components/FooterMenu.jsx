import React from "react"
import {
  safetyItems,
  termsItems,
  businessItems,
  blocketItems,
} from "../helper/constants.js"

const FooterMenu = () => {
  return (
    <>
      <div className="color-wrapper">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
        <div className="div6"></div>
        <div className="div7"></div>
      </div>
      <div className="footer-wrapper">
        <div className="list-wrapper">
          <ul>
            <h4>Säkerhet</h4>
            {safetyItems?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            <h4>Villkor</h4>
            {termsItems?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            <h4>För företag</h4>
            {businessItems?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul>
            <h4>Blocket</h4>
            {blocketItems?.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default FooterMenu
