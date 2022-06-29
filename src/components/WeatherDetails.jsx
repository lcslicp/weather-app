import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherDetails = () => {
  const [precipitation, setPrecipitation] = useState('');
  const [humidity, setHumidity] = useState('');
  const [wind, setWind] = useState('');

  useEffect(async () => {
    //fetch data
    const url =
      'https://api.weatherapi.com/v1/current.json?key=7431bdaf2eaf4555b6b44405220204&q=Cebu&aqi=no';
    const { data } = await axios.get(url);

    //display Precipitation in mm
    setPrecipitation(data.current?.precip_mm);
    //display Humidity level
    setHumidity(data.current?.humidity);
    //display Wind Velocity in kph
    setWind(data.current?.wind_kph);
  });
  return (
     //[c] in className stands for current
    <div className="details-title z-index-2"> Weather Details
    <div className="c-weather-details flex">
        
        <div className="detail-name">
          <br />
          <span>Precipitation</span>
          <br />
          <span>Humidity</span>
          <br />
          <span>Wind</span>
        </div>
        <div className="detail-value">
          <br />
          <span>{precipitation} mm</span>
          <br />
          <span>{humidity} %</span>
          <br />
          <span>{wind} kph</span>
        </div>
    </div>
    </div>
  );
};

export default WeatherDetails;
