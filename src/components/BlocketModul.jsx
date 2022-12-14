import React, { useState, useRef, useEffect } from "react"
import searchGlass from "../img/icons8-search.svg"
import searchHistory from "../img/icons8-clock.svg"
import exit from "../img/icons8-multiply-24.png"
import arrow from "../img/icons8-expand-arrow-24.png"
import location from "../img/icons8-location-50.png"
import { searchItems, allAreas } from "../helper/constants.js"

const BlocketModul = () => {
  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)
  const [cities, setCities] = useState(false)
  const [pickCity, setPickCity] = useState(null)

  let menuRef = useRef()
  let locationRef = useRef()

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    let thisHandler = (e) => {
      if (!locationRef.current?.contains(e.target)) {
        setCities(false)
      }
    }
    document.addEventListener("mousedown", handler, {
      capture: true,
    })
    document.addEventListener("mousedown", thisHandler, {
      capture: true,
    })

    return () => {
      document.removeEventListener("mousedown", handler, { capture: true })
      document.removeEventListener("mousedown", thisHandler, { capture: true })
    }
  }, [])

  function filterById(id) {
    if (allAreas) {
      const tempCity = allAreas.filter((current) => current.id === id)
      setPickCity(tempCity)
      setCities(false)
    }
  }
  return (
    <div className="blocket-modul">
      <h1>Välkommen till Blocket</h1>
      <h2>Början på något stort</h2>
      <div>
        <p className="description-p-tag">Sök</p>
        <div onClick={() => setOpen(!open)}>
          <div className="search-wrapper">
            <img src={searchGlass} alt="Search" />
            <input
              onChange={(e) => setValue(e.target.value)}
              placeholder="Vad vill du söka efter?"
              type="text"
            />
          </div>
        </div>
        {open ? (
          <ul ref={menuRef} className="search-list">
            {searchItems?.map((item) => (
              <li key={item.id}>
                <div>
                  <img
                    className="clock-icon"
                    width={20}
                    src={searchHistory}
                    alt=""
                  />
                  {item.name}
                </div>
                <img className="exit" src={exit} alt="" />
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </div>
      <div className="drop-down-areas">
        <p className="description-p-tag">Välj plats</p>
        <button onClick={() => setCities(!cities)} className="select-location">
          <div className="pin-wrapper">
            <img className="location-pin" src={location} alt="" />
            {pickCity !== null ? (
              pickCity.map((city) => <h4 key={city.id}>{city.name}</h4>)
            ) : (
              <h4>Hela Sverige</h4>
            )}
          </div>
          <img src={arrow} alt="" />
        </button>
        {cities ? (
          <ul ref={locationRef} className="city-drop">
            {allAreas?.map((city) => (
              <li onClick={() => filterById(city.id)} key={city.id}>
                <p>{city.name}</p>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}

        <button className="find-ads">
          <h4>Hitta annonser</h4>
        </button>
        <button className="small-find-ads">
          <h4>Sök</h4>
        </button>
      </div>
    </div>
  )
}

export default BlocketModul
