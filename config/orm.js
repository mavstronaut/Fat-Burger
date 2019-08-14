const connection = require('./connection.js');

function printQuestionMarks(num) {
    let arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    };

    return arr.toString();
};

function objToSql(ob) {
    let arr = [];
    for (var key in ob) {
        arr.push(key + "=" + ob[key]);
    };

    return arr.toString();
}

