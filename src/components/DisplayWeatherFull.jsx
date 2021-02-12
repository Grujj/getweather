import React from 'react'

export const DisplayWeatherFull = (props) => {

    const {result} = props;
    
    return (
        <div>
            <p>Humidité : {result.humidity} %</p>
            <p>Température max : {result.tempMax} °C</p>
            <p>Température min : {result.tempMin} °C</p>
            <p>Temps : {result.main}</p>
        </div>
    )
}
