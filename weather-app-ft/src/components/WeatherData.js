export function WeatherData(props) {
  return (
    <div className="weather-data">
      <h3>{props.name}</h3>
      <p>{props.region}, {props.country}</p>
      <h5>Local Time: {props.localtime}</h5>
    </div>
  )
}