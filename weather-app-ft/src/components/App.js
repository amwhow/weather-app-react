// import "./App.css";
import React, { useState, useEffect } from 'react';
import { Temperature } from './Temperature'
import { WeatherData } from './WeatherData'
import { WeatherImage } from './WeatherImage'
import { Container } from './Container'
import SearchInput from './SearchInput'

function App() {
  const [weatherData, setWeatherData] = useState(null)
  const [userInput, setuserInput] = useState("Melbourne")

  useEffect(() => {
    fetch(`http://api.weatherstack.com/current?access_key=0e24886d61b152f053ce3a2d7d5a8793&query=${userInput}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.success === false) {
        throw new Error("wrong location");
      }
      setWeatherData(data)
    })
    .catch((e) => {
      console.log(e.message)
    })
  // when userInput changes, call the callback function
  }, [userInput])
  
  if(weatherData) {
    const { temperature, weather_icons, weather_descriptions } = weatherData.current;
    const { name, country, region, localtime } = weatherData.location
    return (
      <Container>
        <WeatherData 
          name={name}
          country={country}
          region={region}
          localtime={localtime}
        />
        <WeatherImage                                     weather_descriptions={weather_descriptions}
          weather_icons={weather_icons}
        />
        <Temperature 
          temperature={temperature}
          
        />
        <SearchInput setuserInput={setuserInput}/>
      </Container>
    );
  }
  else {
    return <h2>Loading...</h2>
  }
  
}

export default App;
