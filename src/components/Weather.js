import React,{useState,useEffect} from 'react';

import axios from 'axios';
import '../styles/weather.scss'

const Weather = (props)=>{
    const {setState} = props;

    const kelvin = 273;
    const APIKEY = '9f47dbe7e74e9cca1168773c174db9a2'
    let cityKey = 'London';
   
    
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityKey}&appid=${APIKEY}`;
    useEffect(()=>{
        axios.get(URL).then(res=>{
            let result = Math.floor(res.data.main.temp)-kelvin;
            setState((state)=>({...state,weather:result}));
            
            
        }).catch(error=>{
            console.log(error);
        })

    },[])

  

    //console.log(props.weather)
    let background;
    console.log(props.weather);
    if(props.weather <0){
        background = "lightblue";
    }
    else if(props.weather <5){
        background ="darkblue";
    }
    else if(props.weather <=15){
        background = "DodgerBlue";
    }
    else if(props.weather <19){
        background = "#228B22"
    }
    else if(props.weather >20){
        background = "DarkOrange";
    }
    
 



    return <div style={{background:background}} className="weather-widget" >{props.weather}&deg;C</div>
}


export default Weather;


