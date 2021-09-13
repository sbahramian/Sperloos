'use strict';

// application require helper
const writeJsonToFile = require('../helper/writeJsonToFile');

// application require parser
const parserTitle = require('./parserCityTitle');
const parserDailyCalendar = require('./parserCityDailyCalendar');
const parserMonthlyCalendar = require('./parserCityMonthlyCalendar');

/*
    This function for parser data.
*/
exports.weatherParser = async function(weatherHTMLDaily, weatherHTMLMonthly) {  

    // get city name
    let city_name = await parserTitle.parserTitle(weatherHTMLMonthly);

    // get daily calendar
    let daily_calendar = await parserDailyCalendar.parserDailyCalendar(weatherHTMLDaily);

    // get monthly calendar
    let monthly_calendar = await parserMonthlyCalendar.parserMonthlyCalendar(weatherHTMLMonthly);        
    
    // JSON result file weather    
    let jsonResultFile = {
        'city_name' : city_name,
        'update_tiem' : new Date(),
        'daily_calendar': daily_calendar,
        'monthly_calendar': monthly_calendar,
    };
    
    let fileNamePath = './result/' + city_name;
    
    // write json file 
    await writeJsonToFile.writeJsonToFile( fileNamePath, jsonResultFile )
}

