import React from "react"
import BlocketModul from "./BlocketModul"
import BlocketMenu from "./BlocketMenu"
import CategoriesMenu from "./CategoriesMenu"
import FooterMenu from "./FooterMenu"

const Main = () => {
  return (
    <div>
      <BlocketMenu />
      <div className="add-frame">
        <BlocketModul />
        <div className="header-wrapper">
          <h5>4 av 5 barn kan tänka sig begagnat i julklapp</h5>
          <h4>Så för vems skull köper du nytt?</h4>
        </div>
      </div>
      <CategoriesMenu />
      <FooterMenu />
    </div>
  )
}

export default Main
