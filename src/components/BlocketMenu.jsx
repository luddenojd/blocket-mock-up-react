import React from "react"
import blocket from "../img/blocket-logo.png"
import plus from "../img/icons8-plus-24.png"
import arrow from "../img/icons8-chevron-down-30.png"
import search from "../img/icons8-search.svg"
import message from "../img/icons8-chat-message-50.png"
import bell from "../img/icons8-notification-48.png"
import user from "../img/icons8-user-24.png"

const BlocketMenu = () => {
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
          <img src={blocket} width={120} alt="" />
          <button>
            <h4>Kategorier</h4>
            <img src={arrow} width={15} alt="" />
          </button>
          <div></div>
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
