var burger = require('./burger.js');
var connection = require('../config/connection.js');
var newLine = '\n\n';

burger.selectAll(function(data) {
    console.log('burger selectAll test' + newLine);
    console.log(':: burger menu ::' + newLine);

    for (var i = 0; i < data.length; i++) {
        console.log('burger ID = ' + data[i].id);
        console.log('burger name = ' + data[i].burger_name);
        console.log('ready to eat = ' + data[i].devoured);
        console.log(newLine);
    };
});

burger.insertOne(['burger_name', 'devoured'],
    ['Orange Carrot Mango Smoothie', false],
    function (data) {
        console.log('insert burger test' + newLine);
        console.log('inserted new row with id = ' + data.insertId + newLine);
    }
);

burger.updateOne({ devoured: true }, 'id = 2', function(data) {
    console.log(newLine + 'burger update test' + newLine);
    console.log('result: ' + data.message);
});

connection.end();

