import React, { useState, useEffect } from 'react';
import './App.css';
//dependencies
import LottieAnimation from './components/LottieAnimation';
import axios from 'axios';
import moment from 'moment';

//components
import Header from './components/Header';
import Weather from './components/Weather';

const App = () => {
  const url =
    'https://api.weatherapi.com/v1/current.json?key=7431bdaf2eaf4555b6b44405220204&q=Cebu&aqi=no';

  const [theme, setTheme] = useState('theme');

  useEffect(async () => {
    const { data } = await axios.get(url); //fetch data

    //extract and format time
    const localTime = data.location?.localtime;
    const currentHour = moment(localTime).format('H');

    //update page theme according to time of day
    setTheme(() =>
      currentHour <= 11
        ? 'day-theme'
        : currentHour >= 12 && currentHour <= 17
        ? 'midday-theme'
        : 'night-theme'
    );
  }, []);

  return (
    <div className={theme}>
      <Header />
      <Weather />
      <LottieAnimation />
    </div>
  );
};

export default App;
