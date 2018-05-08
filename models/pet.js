var orm = require("../config/orm.js");

var pet = {
  selectAll: function (cb) {
    orm.all("pets", function (res) {
      cb(res);
    });
  },
  createOne: function (values, cb) {
    orm.create(values, function (res) {
      cb(res);
    });
  },
  updateOne: function (id, cb) {
    orm.update(id, function (res) {
      cb(res);
    });
  }
};

module.exports = pet;
