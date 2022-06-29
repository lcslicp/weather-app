import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import DateTime from './DateTime';

const Header = () => {
  const url =
    'https://api.weatherapi.com/v1/current.json?key=7431bdaf2eaf4555b6b44405220204&q=Cebu&aqi=no';

  const [header, setHeader] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(async () => {
    //fetch data
    const { data } = await axios.get(url);

    //set name of city or location
    setHeader(data.location?.name);

    const localTime = data.location?.localtime;
    const currentHour = moment(localTime).format('H');

    //update greeting
    setGreeting(() =>
      currentHour <= 11
        ? 'Morning'
        : currentHour >= 12 && currentHour <= 17
        ? 'Afternoon'
        : 'Evening'
    );
  }, []);

  return (
    <div className="header page-padding flex z-index-2">
      <h1 className="greeting">
        Good {greeting}!<br />
        <span className="location"> {header} </span>
      </h1>
      <DateTime />
    </div>
  );
};

export default Header;
