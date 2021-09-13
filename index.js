'use strict';

// axios npm pack
const axios = require('axios');

// application require ...
const parserCityWeather = require('./parsing/parserCityWeather');
const default_config = require('./config/default_config.json');

(async () => {

    console.clear();

    /*
        get parallel daily and monthly weather information from accuweather.com for landon city
        if you change city , please config ./config/default_config.json' and add row to Promise call.
    */
    Promise.all([
        axios.get(default_config.get_london_weather.daily),
        axios.get(default_config.get_london_weather.monthly),
    ])
    .then(weather => {
        /*
            weather[0].data => daily weather information
            weather[1].data => monthly weather information
        */
        parserCityWeather.weatherParser(weather[0].data, weather[1].data)
    })
    .catch(error => {
        console.log(error);
    });

})();
