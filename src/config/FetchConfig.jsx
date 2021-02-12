export class FetchConfig {

    url;
    apiKey;
    HTTpHeaders;
    init;

    constructor(){

        this.url =  'http://api.openweathermap.org/data/2.5/weather';
        this.apiKey =  '************';
        this.HTTpHeaders =  new Headers();
        this.init = {
            method: 'GET',
            headers: this.HTTpHeaders,
            cache: 'default',
            mode: 'cors'
        };
    }
    
}
