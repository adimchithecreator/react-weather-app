import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row">
        <div className="col-4">
      <h1 className="ml-5 mt-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
          <div className="clearFix">
            <div className="row wedd">
            <div className="col-2 mt-2">
              <WeatherIcon code={props.data.icon} size={72} /> 
              </div>
              <div className="col-2 mt-3 " >
              <WeatherTemperature celsius={props.data.temperature} style={{textAlign:"center"}} />
              </div>
             
              <p style={{fontSize:"20px", fontWeight:"bold"} } className="text-capitalize text-dark ">{props.data.description}</p>
            </div>

          </div>
        </div>
        <div className="row">
        <div className="col-2 text-center">
            <h5> Humidity</h5>
            <p className="text-dark">
          
           {props.data.humidity}%
           </p>
            </div>
            <div className="col-2 text-center" >
                <h5>
                Wind
                </h5>
            <p className="text-dark">
                {props.data.wind} km/h
            </p>
          
        </div>
        </div>
  </div>
  );
}