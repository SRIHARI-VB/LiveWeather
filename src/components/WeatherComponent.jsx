import React from "react";
import styled from "styled-components";
import WeatherCondition from "../components/weather-components/WeatherCondition";
import Condition from "../components/weather-components/Condition";
import WeatherLogo from "../components/weather-components/WeatherLogo";
import condition from "../assets/mist.png";
import Location from "./Location";
import WeatherInfoLabel from "../components/weather-components/WeatherInfoLabel";
import WeatherInfoContainer from "../components/weather-components/WeatherInfoContainer";
import WeatherInfoComponent from "./WeatherInfoComponent";
import CityLabel from "./city-components/CityLabel";
import SearchBox from "./SearchBox";

export const WeatherIconsCollection = {
    temp: "../assets/snow.png",
    pressure: "../assets/snow.png",
    humidity: "../assets/snow.png",
    wind: "../assets/snow.png",
};

const WeatherComponent = () =>{
    return (
        <>
            <WeatherCondition>
                <Condition><span>30 C</span> | Mist</Condition>
                <WeatherLogo src={condition} alt="condition"/>
            </WeatherCondition>
            <Location>Coimbatore, IN</Location>
            <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
            <WeatherInfoContainer>
                <WeatherInfoComponent name="temp" value="23"/>
                <WeatherInfoComponent name="humidity" value="32"/>
                <WeatherInfoComponent name="wind" value="3"/>
                <WeatherInfoComponent name="pressure" value="44"/>
            </WeatherInfoContainer>
            <CityLabel>Find Weather of your city</CityLabel>
            <SearchBox >
                <input className="form-control"  placeholder="City"></input>
                <button className="btn btn-primary">Search</button>
            </SearchBox>
        </>
    );
};

export default WeatherComponent;