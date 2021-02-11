import React, { useState, useEffect } from 'react'
import { WeatherServices } from '../services/WeatherServices'

export const Weather = (props) => {

    const [city, setCity] = useState(props.city);

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

        </div>
    )
}
