import React from "react";
import { FaSun } from 'react-icons/fa';
import {FaCloud} from 'react-icons/fa';
import { FaSnowflake } from 'react-icons/fa';
import { FaSmog } from 'react-icons/fa';

export default function Location() {
  return (
    <div className="row bottomSection" id="forecast">
      <div className="col-sm-12 col-md-6 col-xl-2">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              {" "}
              <span id="temp-day-one"></span>°
            </h4>
            <h5 className="weather-icon">
              <i><FaCloud /></i>
            </h5>
            <p className="card-text" id="day-one">
              hrs:min
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-2">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              {" "}
              <span id="temp-day-two"></span>°
            </h4>
            <h5 className="weather-icon">
              <i><FaSun /></i>
            </h5>
            <p className="card-text" id="day-one">
              hrs:min
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-2">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              {" "}
              <span id="temp-day-three"></span>°
            </h4>
            <h5 className="weather-icon">
              <i><FaCloud /></i>
            </h5>
            <p className="card-text" id="day-one">
              hrs:min
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-2">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              {" "}
              <span id="temp-day-four"></span>°
            </h4>
            <h5 className="weather-icon">
              <i><FaSun /></i>
            </h5>
            <p className="card-text" id="day-one">
              hrs:min
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-xl-2">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">
              {" "}
              <span id="temp-day-five"></span>°
            </h4>
            <h5 className="weather-icon">
              <i><FaSun /></i>
            </h5>
            <p className="card-text" id="day-one">
              hrs:min
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
