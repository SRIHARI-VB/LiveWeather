import React from "react";
import styled from "styled-components";
import logo from "../assets/WeatherIcons.gif";
import "bootstrap/dist/css/bootstrap.css";
import SearchBox from "./SearchBox";
import CityLabel from "../components/city-components/CityLabel";
import WeatherLogo from "../components/weather-components/WeatherLogo";


const Logo = styled.img`
    height: 8rem;
    width: 8rem;
    margin: 2.5rem auto;
    
`;


const CityComponent = (props) => {
    return (
        <>
            {/* <Logo src={logo} alt="logo" /> */}
            <WeatherLogo src={logo} alt="logo"/>
            <CityLabel>Find Weather of your city</CityLabel>
            
            <SearchBox >
                <input className="form-control"  placeholder="City"></input>
                <button className="btn btn-primary">Search</button>
            </SearchBox>
        </>
    );
};
export default CityComponent;
