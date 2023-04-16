import React, { useState, useEffect } from 'react';
import './App.css';
import axios from './api/axios';

import Location from './components/Location';
import Searchbar from './components/Searchbar';
import WeatherDetails from './components/WeatherDetails';

const App = () => {
  apiKey = import.meta.env.VITE_API_KEY;
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
    gust: '',
  });
  const fetchWeatherData = async () => {
    try {
      const { data } = await axios.get(`current.json?key=${apiKey}`, {
        params: {
          q: query,
        },
      });
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
      });
    } catch (error) {
      console.log(error);
    }
  };

  const date = new Date(weather.time);
  const currentHour = date.getHours();

  const handlePageTheme = () => {
    setTheme(
      currentHour <= 5
        ? 'dawn-theme'
        : currentHour >= 6 && currentHour <= 11
        ? 'day-theme'
        : currentHour >= 12 && currentHour <= 17
        ? 'midday-theme'
        : 'night-theme'
    );
  };

  useEffect(() => {
    fetchWeatherData();
  }, [query]);

  useEffect(() => {
    handlePageTheme();
  }, [weather]);

  return (
    <div className={theme}>
      <Location weather={weather} />
      <Searchbar setQuery={setQuery} />
      <WeatherDetails weather={weather} />
    </div>
  );
};

export default App;
