import React from "react";
import styled from "styled-components";
import WeatherCondition from "../components/weather-components/WeatherCondition";
import Condition from "../components/weather-components/Condition";
import WeatherLogo from "../components/weather-components/WeatherLogo";
// import condition from "../assets/mist.png";
import Location from "./Location";
import WeatherInfoLabel from "../components/weather-components/WeatherInfoLabel";
import WeatherInfoContainer from "../components/weather-components/WeatherInfoContainer";
import WeatherInfoComponent from "./WeatherInfoComponent";
import CityLabel from "./city-components/CityLabel";
import SearchBox from "./SearchBox";

export const WeatherConditionCollection = {
    Drizzle: "./weather-app/assets/drizzle.png",
    Mist: "./weather-app/assets/mist.png",
    Snow: "./weather-app/assets/snow.png",
    Rain: "./weather-app/assets/rain.png",
    Clouds: "./weather-app/assets/clouds.png",
    Rain: "./weather-app/assets/rain.png",
    Clear: "./weather-app/assets/clear.png",
};

const WeatherComponent = (props) =>{
    const {weather, updateCity, fetchWeather} = props;
    return (
        <>
            <WeatherCondition>
                <Condition><span>{`${Math.floor(weather?.main?.temp-273)}°C`}</span>{` | ${weather?.weather[0]?.description}`}</Condition>
                <WeatherLogo src={WeatherConditionCollection[weather?.weather[0]?.main]} alt="condition"/>
            </WeatherCondition>
            <Location>{`${weather?.name}, ${weather?.sys?.country}`}</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name="temp" value={`${Math.floor(weather?.main?.temp-273)}°C`}/>
                <WeatherInfoComponent name="humidity" value={weather?.main?.humidity}/>
                <WeatherInfoComponent name="wind" value={weather?.wind?.speed}/>
                <WeatherInfoComponent name="pressure" value={weather?.main?.pressure}/>
            </WeatherInfoContainer>
            <CityLabel>Find Weather of your city</CityLabel>
            <SearchBox onSubmit={fetchWeather}>
                <input className="form-control"  placeholder="City" onChange={(e)=>updateCity(e.target.value)}></input>
                <button type="submit" className="btn btn-primary">Search</button>
            </SearchBox>
        </>
    );
};

export default WeatherComponent;