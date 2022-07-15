import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
        <div className="">
      <h1 className="mt-5">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
      </ul>
          <div className="clearFix">
            <div className=" wedd">
            <div className=" mt-2">
              <WeatherIcon code={props.data.icon} size={72} /> 
              </div>
              <div className=" mt-3 " >
              <WeatherTemperature celsius={props.data.temperature} style={{textAlign:"center"}} />
              </div>
             </div>
              <p style={{fontSize:"20px", fontWeight:"bold"} } className="text-capitalize text-dark mt-5">{props.data.description}</p>
        </div>
        <div className=" speed">
        <div className="">
            <h5> Humidity</h5>
            <p className="text-dark">
           {props.data.humidity}%
           </p>
            </div>
            <div className="text-center" >
                <h5>
                Wind
                </h5>
            <p className="text-dark">
                {props.data.wind} km/h
            </p>
        </div>
        </div>
        </div>
  </div>
  );
}