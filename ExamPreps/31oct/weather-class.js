let result = (function(){
    let id = 0;

    return class Weather{
        constructor(temperature,humidity,pressure,windSpeed){
            this.temperature = temperature;
            this.pressure = pressure;
            this.humidity = humidity;
            this.windSpeed = windSpeed;
            this.id = id;
            id++;
        }

        toString(){
            let text = `Reading ID: ${this.id}\nTemperature: ${this.temperature}*C\nRelative Humidity: ${this.humidity}%\nPressure: ${this.pressure}hpa\nWind Speed: ${this.windSpeed}m/s`
            if(this.temperature < 20 && (this.pressure < 700 || this.pressure > 900) && this.windSpeed > 25){
                text += `\nWeather: Stormy`
            } else {
                text += `\nWeather: Not stormy`
            }
            return text;
        }
    }
})();

let Weather = result;
let weather1 = new Weather(32, 66, 760, 12);
console.log(weather1.toString());
let record2 = new Weather(10, 40, 680, 30);
console.log(record2.toString());

