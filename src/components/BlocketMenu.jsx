import React, { useState, useEffect, useRef } from "react"
import blocket from "../img/blocket-logo.png"
import blocketMobile from "../img/blocketLogotype.png"
import plus from "../img/icons8-plus-24.png"
import arrow from "../img/icons8-chevron-down-30.png"
import arrowUp from "../img/icons8-chevron-up-30.png"
import search from "../img/icons8-search.svg"
import message from "../img/icons8-chat-message-50.png"
import bell from "../img/icons8-notification-48.png"
import user from "../img/icons8-user-24.png"
import {
  fordonItems,
  homeItems,
  personalItems,
  electricItems,
  hobbyItems,
  operationItems,
} from "../helper/constants.js"

const BlocketMenu = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [point, setPoint] = useState(false)

  let categoryRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!categoryRef.current?.contains(e.target)) {
        setOpenMenu(false)
        setPoint(false)
      }
    }
    document.addEventListener("mousedown", handler, {
      capture: true,
    })
    return () => {
      document.removeEventListener("mousedown", handler, { capture: true })
    }
  })

  function viewCategories() {
    setOpenMenu(!openMenu)
    setPoint(true)
  }
  return (
    <>
      <div className="colors-wrapper">
        <div className="div1"></div>
        <div className="div2"></div>
        <div className="div3"></div>
        <div className="div4"></div>
        <div className="div5"></div>
        <div className="div6"></div>
        <div className="div7"></div>
      </div>
      <div className="blocket-menu">
        <div className="logo-wrapper">
          <img className="mobile" src={blocketMobile} width={114} alt="" />
          <img className="desktop" src={blocket} width={120} alt="" />
          <button onClick={() => viewCategories()}>
            <h4>Kategorier</h4>
            {point ? (
              <img src={arrowUp} width={15} alt="" />
            ) : (
              <img src={arrow} width={15} alt="" />
            )}
          </button>
          {openMenu ? (
            <div ref={categoryRef} className="large-categories-menu">
              <ul>
                <h4>Alla annonser på blocket</h4>
                <h4>Fordon</h4>
                {fordonItems?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul>
                <h4>För hemmet</h4>
                {homeItems?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <h4>Personligt</h4>
                {personalItems?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <h4>Elektronik</h4>
                {electricItems?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul>
                <h4>Fritid & hobby</h4>
                {hobbyItems?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <h4>Affärsverksamhet</h4>
                {operationItems?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul>
                <h4>Övrigt</h4>
                <p>Efterlysningar</p>
                <p>Övrigt</p>
                <h4>Bostad</h4>
                <h4>Jobb</h4>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="button-wrapper">
          <button className="add-plus">
            <img src={plus} width={20} alt="" />
            <h4>Lägg in annons</h4>
          </button>
          <button className="small-buttons">
            <img src={search} width={25} alt="" />
            <p>Annonser</p>
          </button>
          <button className="small-buttons">
            <img src={message} width={25} alt="" />
            <p>Meddelanden</p>
          </button>
          <button className="small-buttons">
            <img src={bell} width={25} alt="" />
            <p>Bevakningar</p>
          </button>
          <button className="small-buttons">
            <img src={user} alt="" />
            <p>Logga in</p>
          </button>
        </div>
      </div>
    </>
  )
}

export default BlocketMenu
