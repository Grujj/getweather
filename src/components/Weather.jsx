import React, { useState, useEffect } from 'react'
import { ResultModel } from '../models/ResultModel';
import { WeatherServices } from '../services/WeatherServices'
import { DisplayWeatherEmpty } from './DisplayWeatherEmpty';
import { DisplayWeatherFull } from './DisplayWeatherFull';


export const Weather = (props) => {

    const {city} = props;
    const [result, setResult] = useState(new ResultModel())

    useEffect(() => {
        getWeather()
    }, [city])

    useEffect(() => {

    }, [result])
    
    /**
     * Methode qui gere la recherche de meteo par ville
     */
    const getWeather = async () => {
        if(isSearchable()){
            const weatherService = new WeatherServices();
            return await weatherService.getWeather(city)
            .then((res) => {
                setFullResult(res);
            });
        }
    }

    /**
     * Methode qui determine si la recherche est possible
     */
    const isSearchable = () => {
        if(city !== null && city !== undefined && city !== "")
            return true;
    }

    /**
     * Methode qui gere l'affichage du resultat
     * 
     * @param {Object} res 
     */
    const setFullResult = (res) => {
        if(res.message !== "city not found"){
            const model = new ResultModel();
            model.setFullResultModel(res)
            setResult(model)
        }
    } 

    return(
        <div>
            {
                isSearchable() ? 
                <DisplayWeatherFull result={result}/>
                     : 
                <DisplayWeatherEmpty/>
            }
        </div>
    )
    
}
