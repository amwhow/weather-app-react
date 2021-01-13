export function WeatherImage(props) {
  return (
    <div className="weather-image">
      <img src={props.weather_icons} alt={props.weather_descriptions} />
    </div>
  )
}
