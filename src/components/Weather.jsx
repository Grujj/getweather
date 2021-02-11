import React, { useState, useEffect } from 'react'
import { WeatherServices } from '../services/WeatherServices'

export const Weather = (props) => {

    const [city, setCity] = useState(props.city);
    const [result, setResult] = useState({})

    useEffect(() => {
        if(city !== null && city !== undefined && city !== ""){
            console.log(city);
            const service = new WeatherServices();
            let result = service.getWeather(city);

            console.log(result); 
        }
        
    }, [city])

    return (
        <div>
            <p>Ressenti : {result.ressenti}</p>
            <p>Min : {result.min}</p>
            <p>Max : {result.max}</p>
            <p>Humidité : {result.humidite}</p>
            <p>Pression : {result.pression}</p>
        </div>
    )
}
