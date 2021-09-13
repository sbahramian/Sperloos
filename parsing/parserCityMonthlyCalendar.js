'use strict';

// application require helper
const convertHTMLToJSDOM = require('../helper/convertHTMLToJSDOM');

/*
    This function for parser data.
*/
exports.parserMonthlyCalendar = async function(weatherHTML) {  
    
    let result = [];

    // get jsdom file from html file
    const jsdom = await convertHTMLToJSDOM.getJSDOM(weatherHTML);

    // get monthly-calendar data for parsing
    var monthlyCalendar = jsdom.window.document.getElementsByClassName('monthly-calendar')[0];

    // get monthly-calendar child count
    let countChild = jsdom.window.document.getElementsByClassName('monthly-calendar')[0].childElementCount;
    
    // check start and end month days
    let viewFirstDay = false;
    let allowPush = false;

    // get daily high and low temp from monthly-calendar
    for (let i=0 ; i < countChild; i++ ) {

        let date = monthlyCalendar.children[i].children[0].children[0].innerHTML.trim();
        let high = monthlyCalendar.children[i].children[1].children[0].innerHTML.trim();
        let low = monthlyCalendar.children[i].children[1].children[1].innerHTML.trim();
        
        // check and control to add this month data
        if (viewFirstDay == true & date == 1) {
            allowPush = false;
        }

        if (viewFirstDay == false & date == 1) {
            viewFirstDay = true;
            allowPush = true;
        }

        if (allowPush) {
            result.push({
                'date': date,
                'temp' : {
                    'high' : high,
                    'low' : low
                }
            });
        }
    }

    return result;
}