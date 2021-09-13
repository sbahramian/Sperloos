'use strict';

// application require helper
const convertHTMLToJSDOM = require('../helper/convertHTMLToJSDOM');

/*
    This function for parser data.
*/
exports.parserDailyCalendar = async function(weatherHTML) {  
    
    let result = [];

    // get jsdom file from html file
    let jsdom = await convertHTMLToJSDOM.getJSDOM(weatherHTML);

    // get daily-calendar data for parsing
    var dailyCalendar = jsdom.window.document.getElementsByClassName('page-column-1')[0];
    
    // get daily-calendar child count
    let countChild = jsdom.window.document.getElementsByClassName('page-column-1')[0].childElementCount;

    // report date daily weather
    let report_date = dailyCalendar.children[1].children[0].innerHTML.trim();

    // get daily high and low temp from daily-calendar
    for (let i=1 ; i < 14; i++ ) {
        try {
            if (dailyCalendar.children[1].children[i].children[0].childElementCount > 0) {
                let day = dailyCalendar.children[1].children[i].children[0].children[0].children[0].children[0].innerHTML.trim();
                let date = dailyCalendar.children[1].children[i].children[0].children[0].children[0].children[1].innerHTML.trim();
                let tempHigh = dailyCalendar.children[1].children[i].children[0].children[0].children[2].children[0].innerHTML.trim();
                let tempLow = dailyCalendar.children[1].children[i].children[0].children[0].children[2].children[1].innerHTML.trim();
                let phrase = dailyCalendar.children[1].children[i].children[0].children[1].innerHTML.trim();
                let precip = dailyCalendar.children[1].children[i].children[0].children[2].innerHTML.trim().split('">')[1].trim();
                
                result.push({
                    'info' : {
                        'date' : {
                            'day': day,
                            'date': date
                        }
                    },
                    'phrase' : phrase,
                    'temp' : {
                        'high' : tempHigh,
                        'low' : tempLow
                    },
                    'precip' : precip
                });
            }            
        } catch (error) {
            // get error for this tag in content-module
            // <div id="connatix" class="content-module"></div>
        }
    }

    return {
        'report_date': report_date,
        'result': result
    };
}