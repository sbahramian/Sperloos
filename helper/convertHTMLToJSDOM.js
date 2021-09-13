'use strict';

// jsdom npm pack
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

/*
    This function convert html file to jsdom
*/
exports.getJSDOM = async function(htmlFile) {   
    return new JSDOM(htmlFile);
}