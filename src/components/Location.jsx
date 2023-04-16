import moment from 'moment';
import LottieAnimation from './LottieAnimation';

const Location = ({ weather }) => {
  const date = moment(weather.time).format('LLLL');
  return (
    <section className='page-padding flex-row main-text'>
      <div className='flex-col'>
        <div>
          <h1 className='margin-0'>{weather.location}</h1>
          <p className='margin-0 text'>
            {weather.region}, {weather.country}
          </p>
          <p className='margin-0 text'>Last Updated: {date}</p>
        </div>
        <div className='flex-col'>
          <h2>{weather.temperature}°c</h2>
          <div className='flex-row condition'>
            <img
              src={weather.conditionIcon}
              alt='weather condition'
              className='weather-icon'
            />
            <p className='subheading'>{weather.condition}</p>
          </div>
        </div>
      </div>
      <LottieAnimation />
    </section>
  );
};

export default Location;
