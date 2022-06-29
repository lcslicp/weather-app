import React, { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherDetails from './WeatherDetails';

const Weather = () => {
  const [temp, setTemp] = useState('');
  const [icon, setIcon] = useState('');
  const [weather, setWeather] = useState('');

  useEffect(async () => {
    //fetch data
    const url =
      'https://api.weatherapi.com/v1/current.json?key=7431bdaf2eaf4555b6b44405220204&q=Cebu&aqi=no';
    const { data } = await axios.get(url);

    //display location tempature in Celcius
    setTemp(data.current?.temp_c);
    //display weather icon
    setIcon(data.current?.condition?.icon);
    //display weather description
    setWeather(data.current?.condition?.text);
  }, []);

  return (
    //[c] in className stands for current
    <div className="c-weather flex ">
      <div className="temp-container page-padding flex z-index-2">
        <h2 className="c-temperature">
          {temp}
          <sup>&deg;C</sup>
          <img src={icon} className="c-weather-icon" />
        </h2>
        <p className="weather-description">{weather}</p>
      </div>
      <span className="divider z-index-2"></span>
      <WeatherDetails />
    </div>
  );
};

export default Weather;
