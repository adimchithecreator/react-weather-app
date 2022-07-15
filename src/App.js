import React from "react";
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="wales" />

      </div>
      <footer className="text-center">
        <small>
          This project was coded by <a href="https://adimchi.netlify.app" target="_blank" rel="noopener noreferrer"> Adimchi</a> and is hosted on <a href="https://github.com/adimchithecreator/react-weather-app" target="_blank" rel="noopener noreferrer">GitHub</a> 
        </small>
      </footer>
    </div>
  );
}