const WeatherDetails = ({ weather }) => {
  const details = [
    {
      id: 1,
      title: 'Precipitation',
      value: weather.precipitation,
      units: 'mm',
    },
    {
      id: 2,
      title: 'Humidity',
      value: weather.humidity,
      units: '%',
    },
    {
      id: 3,
      title: 'Cloud Cover',
      value: weather.cloud,
      units: '%',
    },
    {
      id: 4,
      title: 'Wind',
      value: weather.wind,
      units: 'mph',
    },
    {
      id: 5,
      title: 'UV Index',
      value: weather.uv,
      units: '',
    },
    {
      id: 6,
      title: 'Gust',
      value: weather.gust,
      units: 'mph',
    },
  ];
  return (
    <section className='details-container flex-row page-padding'>
      <div className='flex-row details'>
        {details.map((detail) => (
          <div key={detail.id} className='flex-col detail-border'>
            <p className='label'>{detail.title}</p>
            <p className='label'>
              <span className='detail'>{detail.value} </span> {detail.units}{' '}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WeatherDetails;
