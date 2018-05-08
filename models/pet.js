var orm = require("../config/orm.js");

var pet = {
  selectAll: function (cb) {
    orm.all("pets", function (res) {
      cb(res);
    });
  },
  createOne: function (column, values, cb) {
    orm.create("pets", column, values, function (res) {
      cb(res);
    });
  },
  updateOne: function (id, cb) {
    orm.update("pets", id, function (res) {
      cb(res);
    });
  }
};

module.exports = pet;
