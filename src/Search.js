import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaSun } from 'react-icons/fa';



 

export default function Search(props) {
      let [city, setCity] = useState(props.city);
  let [temperature, setTemperature] = useState(props.temperature);
  let [unit, setUnit] = useState("C");

  function handleSubmit(event) {
    event.preventDefault();
    document.querySelector("#city").innerHTML = `${city}`;
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("C");
    setTemperature(props.temperature);
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("F");
    setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  }

  return (
    <div className="SearchLocation">
      <div className="row topSection">
        <div className="col-sm-12 col-md-9 col-xl-12">
          <form onSubmit={handleSubmit} id="search-form">
            <div className="input-group">
              <div className="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Search City"
                  aria-label=""
                  aria-describedby="button-addon2"
                  onChange={updateCity}
                />
                <label for="floatingInput">Search City</label>
              </div>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                value="submit"
                id="button-addon2"
              >
                <i>< FaSearch /></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row middleSection">
        <div className="col-sm-12 col-md-6 col-xl-6">
          <span id="searchlocation">
            <a href="/" onClick={showCelsius} id="celsius-link">
              °C
            </a>
            <a href="/" onClick={showFahrenheit} id="fahrenheit-link">
              °F
            </a>
          </span>
          <div className="card1" id="now">
            <div className="card-body1">
              <h2 class="card-title">
                <span id="temperature">
                  {temperature}°{unit}{" "}
                </span>
              </h2>
              <h6>
                <i id="main-icon">< FaSun /></i>
                <p>
                  <span className="Description" id="description">
                    sunny
                  </span>
                </p>
              </h6>
              <h3>
                <p className="card-text" id="today">
                  Monday, January 4
                </p>
              </h3>
              <ul>
                <li id="humidityID">
                  Humidity: <span id="humidity">0</span> %
                </li>
                <li id="windID">
                  Wind: <span id="wind-speed">0 </span> km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 col-xl-6" id="card-body2">
          <div href="/" className="currentLocation">
            <i id="current-location-button">< FaMapMarkerAlt />
              {" "}
            </i>
            <h1 id="city">{props.city}</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
