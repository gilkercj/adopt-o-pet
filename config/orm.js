var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}


var orm = {
  all: function(table, cb) {
    var queryString = `SELECT * FROM ${table};`;
    connection.query(queryString, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  create: function(column, values, cb) {
    var queryString = `INSERT INTO pets (${column}) VALUES (${values});`;

    console.log(queryString);

    connection.query(queryString, values, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(condition, cb) {
    var queryString = `UPDATE pets SET adopted true WHERE ${condition};`;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) throw err;

      cb(result);
    });
  }
};

module.exports = orm;
