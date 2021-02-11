import React, { Component } from 'react'
import { FetchConfig } from '../config/FetchConfig';


export class WeatherServices {

    config;
    request;
    city;

    constructor(){
        this.config = new FetchConfig();
        this.request = "";
        this.city = "";
    }

    getWeather = async (city) => {
        this.setCity(city);
        this.setRequest();

        return await fetch(this.request, this.config.init).then(res => res.json()).catch((e) => {console.log(e)});
    }

    setRequest(){
        this.request = `${this.config.url}?q=${this.city}&appid=${this.config.apiKey}&lang=fr&units=metric`;
    }

    setCity(city){
        this.city = city;
    }

}
