import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

const DateTime = () => {
  const url =
    'https://api.weatherapi.com/v1/current.json?key=7431bdaf2eaf4555b6b44405220204&q=Cebu&aqi=no';
  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(async () => {
    //fetch data
    const { data } = await axios.get(url);
    const localTime = data.location?.localtime;

    //dispay Time
    setTime(moment(localTime).format('h:mm A'));
    //display Day of the Week
    setDay(moment(localTime).format('dddd'));
    //display Month and Date
    setDate(moment(localTime).format('MMMM Do'));
  }, []);

  return (
    <div className="date-time">
      <p>
        {time}
        <br />
        {day}, {date}
      </p>
    </div>
  );
};

export default DateTime;
