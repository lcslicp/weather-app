import React, { useState, useEffect } from 'react';
import './App.css';

import LottieAnimation from './components/LottieAnimation';
import axios from './api/axios';

import Location from './components/Location';
import Searchbar from './components/Searchbar';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const [theme, setTheme] = useState('theme');
  const [query, setQuery] = useState('Manila');
  const [weather, setWeather] = useState({
    location: '',
    region: '',
    time: '',
    country: '',
    temperature: '',
    condition: '',
    conditionIcon: '',
    precipitation: '',
    humidity: '',
    cloud: '',
    wind: '',
    uv: '',
    gust: ''
  })
  const fetchWeatherData = async () => {
    try {
      const { data } = await axios.get(`current.json?key=${apiKey}`,
    {params: {
      q: query,
    }});
    setWeather({
      location: data.location?.name,
      region: data.location?.region,
      time: data.location?.localtime,
      country: data.location?.country,
      temperature: data.current?.temp_c,
      condition: data.current?.condition.text,
      conditionIcon: data.current?.condition.icon,
      precipitation: data.current?.precip_mm,
      humidity: data.current?.humidity,
      cloud: data.current?.cloud,
      wind: data.current?.wind_mph,
      uv: data.current?.uv,
      gust: data.current?.gust_mph,
    })
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchWeatherData()
  }, [query]);

  return (
    <div className={theme}>
      <Searchbar setQuery={setQuery} />
      <WeatherDetails weather={weather} />
      <Location weather={weather} />
      <LottieAnimation />
    </div>
  );
};

export default App;
