export class ResultModel {

    humidity;
    tempMax;
    tempMin;
    main;

    constructor(){
        this.humidity = "";
        this.tempMax = "";
        this.tempMin = "";
        this.main = "";
    }

    setFullResultModel(res){
        this.humidity = res.main.humidity;
        this.tempMax = res.main.temp_max;
        this.tempMin = res.main.temp_min;
        this.main = res.weather[0].main;
    }

}