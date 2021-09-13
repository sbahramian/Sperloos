'use strict';
const fs = require('fs');

/*
    This function write weather data city to json file.
*/
exports.writeJsonToFile = async function(fileName, json) {   

    // create result directory
    var dir = './result';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    // write city weather information to json file in result directory
    let data = JSON.stringify(json);
    fs.writeFileSync(fileName + '.json', data);

    console.log('"' + fileName + '.json"' + ' is done.')  
}