import React from "react"
import { allCategories } from "../helper/constants.js"
import arrow from "../img/icons8-chevron-up-30.png"

const CategoriesMenu = () => {
  return (
    <div className="category-wrapper">
      <div className="headers-wrapper">
        <h1>Upptäck våra kategorier</h1>
        <div className="all-categories-link">
          <h4>Alla kategorier</h4>
          <img className="arrow" src={arrow} alt="" />
        </div>
      </div>
      <div className="icons-wrapper">
        {allCategories?.map((icon) => (
          <button className="icon">
            <div className="img-wrapper">
              <img src={icon.img} width={35} alt="" />
            </div>
            <h4>{icon.category}</h4>
          </button>
        ))}
      </div>
    </div>
  )
}

export default CategoriesMenu
