import Footer from "./components/Footer"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import WeatherResult from "./components/WeatherResult"
import { useWeather} from "./weather/hooks/useWeather"

type Props = {}

export  function WeatherApp({}: Props) {

  const {weather, searchWeather, isLoading, error} = useWeather();

  return (
    <div className="containerApp">
        <Header title="Checkea el clima"/>
        <SearchBar 
          buttonText="Buscar" 
          placeHolder="Busca una ciudad"
          onSearch={ (value) => searchWeather(value)}
        />
        {isLoading && <p className="loadingMessage">...</p>}

        {error && <p className="errorMessage">{ error }</p>}

        { (weather && !isLoading) && (
          <WeatherResult weather={weather} />
        )}
        <Footer/>
    </div>
  )
}