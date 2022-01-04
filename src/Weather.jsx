import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("Pune");
  const [weatherData, setWeatherData] = useState(null);

  const APIKey = "548f27687e25ebc0ec024e52067de65c";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`;

  const getData = () => {
    axios
      .get(url)
      .then((res) => setWeatherData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
    document.getElementById("cityName").focus();
  });

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = () => {
    getData();
  };

  const handleKeypress = (e) => {
    if (e.charCode === 13) {
      getData();
    }
  };

  var name = weatherData ? weatherData.name : "";
  var country = weatherData ? weatherData.sys.country : "";
  var humidity = weatherData ? weatherData.main.humidity : "";
  var pressure = weatherData ? weatherData.main.pressure : "";
  var temp = weatherData ? weatherData.main.temp : "";
  var weather = weatherData ? weatherData.weather[0].description : "";
  var iconcode = weatherData ? weatherData.weather[0].icon : "#";

  const d = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";

  return (
    <>
      <div className="container-fluid main_header ">
        <div className="row">
          <div className="col-md-10 col-12 mx-auto">
            <div className="main_content">
              <form className="temp_form">
                <input
                  type="text"
                  id="cityName"
                  placeholder="Enter your city name"
                  autocomplete="off"
                  onChange={handleChange}
                  name="city"
                />
                <input
                  onClick={handleSubmit}
                  onKeyPress={handleKeypress}
                  type="submit"
                  value="search"
                  id="submitBtn"
                />
              </form>
            </div>
            <div className="container-fluid mb-5">
              <div className="row">
                <div className="col-10 mx-auto">
                  <div className="row gy-4">
                    <div className="tempInformation">
                      <div className="top_layer">
                        <p id="day">{days[d.getDay()]}</p>
                        <p id="day">
                          {name}, {country}
                        </p>
                        <p id="today_data">
                          {d.getDate()} {month[d.getMonth()]} ,{d.getFullYear()}
                        </p>
                      </div>
                      <div className="main_layer ">
                        <p id="city_name">
                          {name}, {country}
                        </p>
                        <div className="middle_layer">
                          <p id="temp">
                            <span id="temp_real_val">{Math.round(temp)}</span>
                            <sup>o</sup>C
                          </p>
                          <div className="temp_status">
                            <img
                              src={`http://openweathermap.org/img/w/${iconcode}.png`}
                              alt="Weather icon"
                              style={{ width: "150px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tempInformation">
                      <div className="top_layer">
                        <p id="day">{days[d.getDay() + 1]}</p>
                        <p id="day">
                          {name}, {country}
                        </p>
                        <p id="today_data">
                          {d.getDate() + 1} {month[d.getMonth()]} ,
                          {d.getFullYear()}
                        </p>
                      </div>
                      <div className="main_layer ">
                        <p id="city_name">
                          {name}, {country}
                        </p>
                        <div className="middle_layer">
                          <p id="temp">
                            <span id="temp_real_val">{Math.round(temp)}</span>
                            <sup>o</sup>C
                          </p>
                          <div className="temp_status">
                            <img
                              src={`http://openweathermap.org/img/w/${iconcode}.png`}
                              alt="Weather icon"
                              style={{ width: "150px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tempInformation">
                      <div className="top_layer">
                        <p id="day">{days[d.getDay() + 2]}</p>
                        <p id="day">
                          {name}, {country}
                        </p>
                        <p id="today_data">
                          {d.getDate() + 2} {month[d.getMonth()]} ,
                          {d.getFullYear()}
                        </p>
                      </div>
                      <div className="main_layer ">
                        <p id="city_name">
                          {name}, {country}
                        </p>
                        <div className="middle_layer">
                          <p id="temp">
                            <span id="temp_real_val">{Math.round(temp)}</span>
                            <sup>o</sup>C
                          </p>
                          <div className="temp_status">
                            <img
                              src={`http://openweathermap.org/img/w/${iconcode}.png`}
                              alt="Weather icon"
                              style={{ width: "150px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tempInformation">
                      <div className="top_layer">
                        <p id="day">{days[d.getDay() + 3]}</p>
                        <p id="day">
                          {name}, {country}
                        </p>
                        <p id="today_data">
                          {d.getDate() + 3} {month[d.getMonth()]} ,
                          {d.getFullYear()}
                        </p>
                      </div>
                      <div className="main_layer ">
                        <p id="city_name">
                          {name}, {country}
                        </p>
                        <div className="middle_layer">
                          <p id="temp">
                            <span id="temp_real_val">{Math.round(temp)}</span>
                            <sup>o</sup>C
                          </p>
                          <div className="temp_status">
                            <img
                              src={`http://openweathermap.org/img/w/${iconcode}.png`}
                              alt="Weather icon"
                              style={{ width: "150px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tempInformation">
                      <div className="top_layer">
                        <p id="day">{days[d.getDay() + 4]}</p>
                        <p id="day">
                          {name}, {country}
                        </p>
                        <p id="today_data">
                          {d.getDate() + 4} {month[d.getMonth()]} ,
                          {d.getFullYear()}
                        </p>
                      </div>
                      <div className="main_layer ">
                        <p id="city_name">
                          {name}, {country}
                        </p>
                        <div className="middle_layer">
                          <p id="temp">
                            <span id="temp_real_val">{Math.round(temp)}</span>
                            <sup>o</sup>C
                          </p>
                          <div className="temp_status">
                            <img
                              src={`http://openweathermap.org/img/w/${iconcode}.png`}
                              alt="Weather icon"
                              style={{ width: "150px" }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
