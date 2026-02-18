import type { Weather } from "../weather/interfaces/weather.interface"

type Props = {
    weather: Weather;
}

function WeatherResult({weather}: Props) {

  const themeClass = weather.is_day ? 'day' : 'night';

  return (
    <div className={`container ${themeClass}`}>
        <p>Ciudad: <span className={`dataStyle ${themeClass}`}>{weather.city}</span></p>
        <p>Pais: <span className={`dataStyle ${themeClass}`}>{weather.country}</span></p>
        <p>Temperatura Actual: <span className={`dataStyle ${themeClass}`}>{weather.temp}</span>° C</p>
        <p>Fecha ultima actualizacion: <span className={`dataStyle ${themeClass}`}>{weather.last_update_date} | {weather.last_update_time}</span></p>
    </div>
  )
}

export default WeatherResult