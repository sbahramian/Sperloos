'use strict';

// application require helper
const convertHTMLToJSDOM = require('../helper/convertHTMLToJSDOM');

/*
    This function for parser data.
*/
exports.parserTitle = async function(weatherHTML) {  
    
    // get jsdom file from html file
    const jsdom = await convertHTMLToJSDOM.getJSDOM(weatherHTML);

    const title = jsdom.window.document.querySelector('title');		
    if (title) {
        return title.textContent.split(',')[0];
    }
}