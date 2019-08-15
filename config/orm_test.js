var orm = require('./orm.js');
var connection = require('./connection.js');

var newLine = '\n\n'

orm.selectAll('burgers', function (data) {
    console.log('__orm testing menu__' + newLine);
    console.log(':: burger menu ::' + newLine);

    for (var i = 0; i < data.length; i++) {
        console.log('burgerID = ' + data[i].id);
        console.log('burger name = ' + data[i].burger_name);
        console.log('ready to eat = ' + data[i].devoured);
        console.log(newLine);
    };
});

orm.insertOne('burgers',
['burger_name', 'devoured'],
['Olive vartuce Tomato Portobello Sandwich', false],
function (data) {
    console.log(newLine + 'orm test of value insert' + newLine);
    console.log('Inserted one new row with id = ' + data.insertId + newLine);
});

orm.updateOne('burgers', { devoured: true }, 'id = 4', function(data) {
    console.log(newLine + 'update value test' + newLine);
    console.log('result: '+ data.message);
});

connection.end();