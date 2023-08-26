import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import  CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";
import "./App.css";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 0 30px 15px rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(rgb(127, 212, 255), rgb(157, 212, 25)) !important;

  padding: 20px;
  border-radius: 10px;
  width: 500px;
  background-color:  rgb(127, 212, 255);
  // margin-top: 6rem;
  font-family: Poppins, sans-serif;
`;
const AppName = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #f6f6f6;
  margin-bottom: 2rem;

`;


function App() {
  return (
    <>
      <Container>

        <AppName>React Weather App</AppName>

        {/* <CityComponent/> */}
        <WeatherComponent/>

        

      </Container>
    
      
    </>
  );
}

export default App;
