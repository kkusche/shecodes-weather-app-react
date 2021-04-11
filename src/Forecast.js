import React from "react";

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
              <i className="fas fa-cloud"></i>
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
              <i className="fas fa-cloud"></i>
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
              <i className="fas fa-cloud"></i>
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
              <i className="fas fa-cloud"></i>
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
              <i className="fas fa-cloud"></i>
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
