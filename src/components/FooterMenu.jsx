import React from "react"
import {
  safetyItems,
  termsItems,
  businessItems,
  blocketItems,
} from "../helper/constants.js"
import appStore from "../img/nedladdning.png"
import googlePlay from "../img/nedladdning-1.png"
import schibsted from "../img/schibsted.svg"

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
          <div className="safety-and-terms">
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
          </div>
          <div className="business-and-blocket">
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
        <div className="store-wrapper">
          <img src={appStore} alt="" />
          <img src={googlePlay} alt="" />
        </div>
        <div className="footer-info">
          <img src={schibsted} alt="" />
          <p>
            Blocket har ingen koppling till denna webbplats. Denna webbplatsen
            är enbart byggd för egenstudier.
          </p>
          <a
            target="on_blank"
            href="https://www.linkedin.com/in/ludwig-n%C3%B6jd-019029197"
          >
            Läs mer
          </a>
        </div>
      </div>
    </>
  )
}

export default FooterMenu
